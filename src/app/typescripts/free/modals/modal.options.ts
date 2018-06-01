import { Injectable } from '@angular/core';

@Injectable()
export class ModalOptions {
  /**
   *  Includes a modal-backdrop element. Alternatively, specify static for a backdrop which doesn't close the modal on click.
   */
  //  backdrop?: boolean | 'static';
  backdrop?: boolean | 'static' | any;
  /**
   * Closes the modal when escape key is pressed.
   */
   keyboard?: boolean;

   focus?: boolean;
  /**
   * Shows the modal when initialized.
   */
   show?: boolean;
  /**
   * Ignore the backdrop click
   */
   ignoreBackdropClick?: boolean;
  /**
   * Css class for opened modal
   */
   class?: string;
  /**
   * Toggle animation
   */
   animated?: boolean;
 }

 @Injectable()
 export class MDBModalRef {
  /**
   * Reference to a component inside the modal. Null if modal's been created with TemplateRef
   */
   content?: any | null;
  /**
   * Hides the modal
   */
   hide(): void {}
 }

 export const modalConfigDefaults: ModalOptions = {
   backdrop: true,
   keyboard: true,
   focus: true,
   show: false,
   ignoreBackdropClick: false,
   class: '',
   animated: true
 };

 export const ClassName: any = {
   SCROLLBAR_MEASURER: 'modal-scrollbar-measure',
   BACKDROP: 'modal-backdrop',
   OPEN: 'modal-open',
   FADE: 'fade',
   IN: 'in',     // bs3
   SHOW: 'show'  // bs4
 };

 export const Selector: any = {
   DIALOG: '.modal-dialog',
   DATA_TOGGLE: '[data-toggle="modal"]',
   DATA_DISMISS: '[data-dismiss="modal"]',
   FIXED_CONTENT: '.navbar-fixed-top, .navbar-fixed-bottom, .is-fixed'
 };

 export const TransitionDurations: any = {
   MODAL: 300,
   BACKDROP: 150
 };

 export const DISMISS_REASONS = {
   BACKRDOP: 'backdrop-click',
   ESC: 'esc'
 };
