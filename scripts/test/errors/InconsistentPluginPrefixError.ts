export class InconsistentPluginPrefixError extends Error {

  public constructor(message: string) {
    super(message)
    this.name = 'InconsistentPluginPrefixError'
  }

}
