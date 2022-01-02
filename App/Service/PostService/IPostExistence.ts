interface IPostExistence {
  doesPostExist(post_id: number): Promise<boolean>;
}

export default IPostExistence;
