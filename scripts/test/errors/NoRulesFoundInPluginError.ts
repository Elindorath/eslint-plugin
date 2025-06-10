export class NoRulesFoundInPluginError extends Error {

  public constructor(message: string) {
    super(message)
    this.name = 'NoRulesFoundInPluginError'
  }

}
