/**
 * Aquí se centralizan los datos de contacto de la veterinaria.
 * Los componentes que heredan estos datos extienden esta clase.
 * 
 * Los componentes que la extienden son: TopContactoComponent, FooterComponent, ContactoComponent.
 */

export class BaseComponent {
  //Correo visible en TopContacto y footer, también copiable con ClipboardModule
  readonly correo = 'tphveterinaria@gmail.com';
  //Teléfono en formato legible para mostrarlo al usuario
  readonly telefono = '+57 311 880 0301';
  //Numero en formato internacional sin + ni espacio, el cual es requerido por la API wa.me
  readonly telefonoLink ='573118800301';
  //Dirección física de la veterinaria
  readonly direccion = 'Av. Calle 22 # 93-38';
  // Enlace directo Google Maps con las coordenadas reales de la veterinaria
  readonly linkMapa = 'https://maps.app.goo.gl/R2ANMnqxeY5RAVZXA';
}