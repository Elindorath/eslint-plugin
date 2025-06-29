export class InconsistentPluginInstanceError extends Error {

  public constructor(message: string) {
    super(message)
    this.name = 'InconsistentPluginInstanceError'
  }

}
