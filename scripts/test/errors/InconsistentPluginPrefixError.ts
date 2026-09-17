export class InconsistentPluginPrefixError extends Error {

  public constructor(message: string, options?: ErrorOptions) {
    super(message, options)
    this.name = 'InconsistentPluginPrefixError'
  }

}
