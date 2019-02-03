export class BiometricFingerPrint {
  public label: string = 'Default';
  public code: string = '';
  public snapshot: string = '../../../assets/bg-white.jpg';
  public quality: number = 0;
  public isActive: boolean = false;
  public conditionalClassItems: any = function () {
    return {
      'bg-danger text-light border-light': this.getIsActive(),
      'bg-success': !this.getIsActive()
    };
  };

  public constructor(
    label: string,
    code: string,
    snapshot?: string,
    isActive?: boolean) {
    this.label = label;
    this.code = code,
    this.snapshot = snapshot === undefined ? this.snapshot : snapshot;
    this.isActive = isActive;
  }

  private getIsActive(): boolean {
    return this.isActive;
  }
}

export class BiometricFingerPrintItem {
  public leftHandItems: BiometricFingerPrint[] = [];
  public rightHandItems: BiometricFingerPrint[] = [];
}
