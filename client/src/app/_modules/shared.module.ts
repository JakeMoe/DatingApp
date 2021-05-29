import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CommonModule } from '@angular/common';
import { FileUploadModule } from 'ng2-file-upload';
import { NgxGalleryModule } from '@kolkov/ngx-gallery';
import { NgModule } from '@angular/core';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [],
  imports: [
    BsDatepickerModule.forRoot(),
    BsDropdownModule.forRoot(),
    CommonModule,
    FileUploadModule,
    NgxGalleryModule,
    TabsModule.forRoot(),
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right',
    })
  ],
  exports: [
    BsDatepickerModule,
    BsDropdownModule,
    FileUploadModule,
    NgxGalleryModule,
    TabsModule,
    ToastrModule
  ]
})
export class SharedModule {}
