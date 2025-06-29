export class MultiplePluginsDefinedError extends Error {

  public constructor(message: string) {
    super(message)
    this.name = 'MultiplePluginsDefinedError'
  }

}
