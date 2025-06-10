export class InvalidPluginEntryError extends Error {

  public constructor(message: string, options: { cause: Error; }) {
    super(message, options)
    this.name = 'InvalidPluginEntryError'
  }

}
