import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registrocli',
  templateUrl: './registrocli.component.html',
  styleUrls: ['./registrocli.component.css']
})
export class RegistrocliComponent implements OnInit {

  clienteForm:FormGroup;

  constructor(private fb: FormBuilder, private router:Router ) { 
  this.clienteForm = this.fb.group({
    clienteNombre:['',[Validators.required]],
    clienteDireccion:['',Validators.required],
    clienteTelefono:['',Validators.required],
    clienteCorreo:['',Validators.required]
  })
  }


  ngOnInit(): void {
  }
registroCliente(){
  console.log(this.clienteForm);
  this.router.navigate(['/']);
  Swal.fire({
    icon: 'success',
    title: 'Cliente registrado',

  })
}
 
 
}