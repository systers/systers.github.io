/*tslint:disable:no-invalid-this */
export function OnChange(): any {
  const sufix = 'Change';
  return function OnChangeHandler(target: any, propertyKey: string): void {
    const _key = ` __${propertyKey}Value`;
    Object.defineProperty(target, propertyKey, {
      get(): any { return this[_key]; },
      set(value: any): void {
        const prevValue = this[_key];
        this[_key] = value;
        if (prevValue !== value && this[propertyKey + sufix]) {
          this[propertyKey + sufix].emit(value);
        }
      }
    });
  };
}
/* tslint:enable */
