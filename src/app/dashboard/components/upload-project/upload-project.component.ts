import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DashboardPageType } from '../../../shared';
import { ComplianceApiService } from '../../services/compliance-api.service';
import { HttpEventType } from '@angular/common/http';

@Component({
  selector: 'app-upload-project',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './upload-project.component.html',
  styleUrls: ['./upload-project.component.scss']
})
export class UploadProjectComponent {
  @Output() navigate = new EventEmitter<DashboardPageType>();
  @Output() sendFile = new EventEmitter<any>();
  @Output() fileType = new EventEmitter<string>();
  dashboardPageType = DashboardPageType;

  form!: FormGroup;
  selectedFiles: File[] = [];
  uploadProgress = 0;
  uploadResponse: any;

  locations = [
    { name: 'Sharjah City', zones: ['Al Majaz', 'Al Nahda', 'Al Taawun', 'Al Qasimia'] },
    { name: 'Khor Fakkan', zones: ['Al Lulayyah', 'Al Haray', 'Al Qadisia'] },
    { name: 'Kalba', zones: ['Industrial Area', 'Kalba Corniche', 'Al Mahatta'] },
    { name: 'Dibba Al Hisn', zones: ['Central Area', 'Dibba Corniche'] }
  ];

  availableZones: string[] = [];
  viewErrorForFile: string = '';

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      projectName: ['', Validators.required],
      location: ['', Validators.required],
      projectType: ['', Validators.required],
      zone: [''],
      submissionReference: [''],
      documents: [[]]
    });
  }

  onCancel(dashboardPageType: DashboardPageType) {
    this.navigate.emit(dashboardPageType);
  }

  onSubmit() {
    if (this.form.valid && this.selectedFiles.length > 0) {
      const file = this.selectedFiles[0];
      this.sendFile.emit(file);
      const extension = file.name.split('.').pop()?.toLowerCase() || '';
      this.fileType.emit(extension);
      this.navigate.emit(this.dashboardPageType.UploadProgress);
    } else {
      this.form.markAllAsTouched();
      const invalid = Object.keys(this.form.controls).filter(
        key => this.form.get(key)?.invalid
      );
      console.warn('❌ Invalid fields:', invalid);
    }
  }


  addDocument() {
    console.log('Add Supporting Document clicked');
  }

  onLocationChange(event: Event) {
    const selected = (event.target as HTMLSelectElement).value;
    const location = this.locations.find(l => l.name === selected);
    this.availableZones = location ? location.zones : [];
    this.form.patchValue({ zone: '' });
  }

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const fileArray = Array.from(input.files);

      const allowedExtensions = ['pdf', 'dwg', 'dxf'];
      const validFiles = fileArray.filter(file => {
        const ext = file.name.split('.').pop()?.toLowerCase();
        return ext && allowedExtensions.includes(ext);
      });

      const invalidFiles = fileArray.filter(file => {
        const ext = file.name.split('.').pop()?.toLowerCase();
        return !ext || !allowedExtensions.includes(ext);
      });

      if (invalidFiles.length > 0) {
        this.viewErrorForFile = `Invalid file: ${invalidFiles.map(f => f.name).join(', ')}\nOnly .pdf, .dwg, and .dxf are allowed.`;

      }

      this.selectedFiles = [...this.selectedFiles, ...validFiles];
      this.form.patchValue({ documents: this.selectedFiles });
    }
  }

}
