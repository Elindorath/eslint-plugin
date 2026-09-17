export class MultiplePluginsDefinedError extends Error {

  public constructor(message: string, options?: ErrorOptions) {
    super(message, options)
    this.name = 'MultiplePluginsDefinedError'
  }

}
