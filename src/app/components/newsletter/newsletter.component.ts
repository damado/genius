import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SuscripcionService } from '../../services/suscripcion.service';
import { Suscriptor } from '../../class/suscriptor';

@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.css']
})
export class NewsletterComponent implements OnInit {

	public formulario: FormGroup;
  public suscriptores: Array<Suscriptor>;
  public mensaje: string;

  constructor(protected fb: FormBuilder, protected suscripcionService: SuscripcionService) { }

  ngOnInit() {
  	this.formulario = this.fb.group({
  		'mail' : ['', [Validators.required, Validators.email]]
  	});
  }

  /**
  *  Utiliza el servicio de suscripcion para guardar el mail ingresado en el formulario y reinicia el formulario.
  *  Caso contrario, se notifica que el mail ingresado es ya se encuentra registrado.
  **/
  guardarSuscriptor(): void {
    this.suscripcionService.getSuscriptorPorMail(this.formulario.get('mail').value).subscribe(suscriptor => {
      if (suscriptor != null) {
        this.mensaje = 'El mail ingresado ya se encuentra registrado.';
        return;
      }
      this.suscripcionService.guardarSuscriptor(this.formulario.get('mail').value);
      this.mensaje = 'Su suscripción fue realizada de forma exitosa.';
      this.formulario.reset();
      return;
    });
  }

  /**
  *  Utiliza el servicio de suscripcion para eliminar el mail ingresado en el formulario y reinicia el formulario.
  *  Caso contrario, se notifica que el mail ingresado es incorrecto.
  **/
  cancelarSuscripcion(): void {
    this.suscripcionService.getSuscriptorPorMail(this.formulario.get('mail').value).subscribe(suscriptor => {
      if (suscriptor != null) {
        this.suscripcionService.eliminarSuscriptor(suscriptor.id);
        this.mensaje = 'Se elimino su suscripcion de forma exitosa.';
        this.formulario.reset();
        return;
      }
      this.mensaje = 'El mail no se encuentra registrado, vuelva a intentarlo.';
      return;
    });

  }

}
