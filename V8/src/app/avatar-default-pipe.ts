import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'avatarDefault'
})
export class AvatarDefaultPipe implements PipeTransform {

  private fotoDefault = 'https://imgs.search.brave.com/FXoQ1Ss6J_JSaenZtfAOHvbxxmCjuyVgJ0lgR8e9ihM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wcmV2/aWV3LnJlZGQuaXQv/N2F5amM4czRqMm42/MS5wbmc_YXV0bz13/ZWJwJnM9NjA5YTU4/ZmEyMWQ0NjQyNDg3/OWVlNDQxNTZlNDRl/MDQwNDk0MDU4Mw';

  transform(url?: string): string {
    return url ? url : this.fotoDefault;
  }

}
