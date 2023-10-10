import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  
  jsonData: { name: string; cities: string[] }[] = [ 
  {
    name: 'muthu',
    cities: ['tirunelveli', 'tenkasi']
  }
];
  formGroup: FormGroup;
  formArray: FormGroup;
  myFormAddress: FormGroup;
  constructor(private fb: FormBuilder) {

    this.formGroup = this.fb.group({
      name: ['', Validators.required],
      address: ['', Validators.required]
    })

    this.formArray = this.fb.group({
      name: ['', Validators.required],
      cities: this.fb.array([
        new FormControl(''),
        new FormControl('')
      ])
    });


    this.myFormAddress = this.fb.group({
      permanentAddress: ['', Validators.required],
      sameAddress: [false], // Initialize "sameAddress" to false
      currentAddress: [''], // Initialize "currentAddress" to an empty string
    });

  }

  onSameAddressChange() {
    const sameAddress = this.myFormAddress.get('sameAddress')?.value;
    if (sameAddress) {
      const permanentAddress = this.myFormAddress.get('permanentAddress')?.value;
      this.myFormAddress.get('currentAddress')?.setValue(permanentAddress);
    }else{
      this.myFormAddress.get('currentAddress')?.reset();
      this.myFormAddress.get('currentAddress')?.value;
    }
  }
  onSubmitAdd(){
    const formData = this.myFormAddress.value;
    console.log(formData);
  }

  setFormValues(index: number) {
    const selectedData = this.jsonData[index];
    this.formArray.setValue({
      name: selectedData.name,
      cities: selectedData.cities
    });
    
  }
  
  onEdit() {
    this.setFormValues(0);
    console.log(this.setFormValues(0)); 
  }

  myForm = new FormGroup({
    name: new FormControl('', Validators.required)
  })

  get cities(): FormArray {
    return this.formArray.get('cities') as FormArray;
  }




  onSubmit() {
    const formmm = this.myForm.get('name')?.value;
    console.log(formmm);

    console.log(this.myForm.value);
    this.myForm.reset();

  }

  onSub() {
    const form = this.formGroup.value;
    console.log(form);
    this.formGroup.reset();
  }

  onSubmitArray() {
    const form = this.formArray.value;
    console.log(form, 'formm');
    this.formArray.reset();
  }

}
