import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Producto } from 'src/app/models/producto';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  productoForm: FormGroup;

  constructor(private fb: FormBuilder, private router:Router) { 
    this.productoForm = this.fb.group({
      productoNombre : ['', [Validators.required ]],              
      productoPasillo : ['', Validators.required],
      productoValor : ['', Validators.required],
      proveedorProducto : ['', Validators.required]

    })
  }



  ngOnInit(): void {
  }

  agregarProducto(){
    console.log(this.productoForm);
    // console.log(this.productoForm.get('producto')?.value)
    const PRODUCTO: Producto = {
      nombre: this.productoForm.get('productoNombre')?.value,
      ubicacion: this.productoForm.get('productoPasillo')?.value,
      precio: this.productoForm.get('productoValor')?.value,
      proveedor: this.productoForm.get('proveedorProducto')?.value
    }
    console.log(PRODUCTO)
    
    this.router.navigate(['/']);
    Swal.fire({
      icon: 'success',
      title: 'producto registrado',

    })
  }

}
