export class InconsistentPluginEntryError extends Error {

  public constructor(message: string, options: { cause: Error; }) {
    super(message, options)
    this.name = 'InconsistentPluginEntryError'
  }

}
