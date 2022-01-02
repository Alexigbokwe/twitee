import ServiceProvider from "Elucidate/Support/ServiceProvider";
import Authenticator from "Elucidate/Auth/Authenticator";
import DOCUMENTATION from "Elucidate/Documentation/DocumentationServiceProvider";
import routeDocumentation from "Resources/RouteDocumentation";
import PostService from "App/Service/PostService";
import CommentService from "App/Service/CommentService";
import PostLikeService from "App/Service/PostLikeService";

class AppServiceProvicer extends ServiceProvider {
  /**
   * Register any application services.
   * @return void
   */
  public register() {
    this.app.singleton("Authenticator", Authenticator, "class");
    this.app.singleton("PostService", PostService, "class");
    this.app.singleton("CommentService", CommentService, "class");
    this.app.singleton("PostLikeService", PostLikeService, "class");
  }

  /**
   * Bootstrap any application services.
   * @return void
   */
  public async boot() {
    //
  }

  /**
   * Load any service after application boot stage
   * @return void
   */
  public async booted() {
    // Documentation endpoint is '/documentationView' for JSON response '/documentationJson'
    DOCUMENTATION.autoDocumentEndPoints("./Resources", routeDocumentation);
  }
}

export default AppServiceProvicer;
