import { ToastController, LoadingController } from '@ionic/angular';

export class abstractPage  {

    constructor(public toastController: ToastController, public loadingController: LoadingController) { }

    ngOnInit() {
    }

    async Toast(message: string, toastType: ToastType) {
        const toast = await this.toastController.create({
            message: message,
            duration: 2000,
            color : toastType
        });
        toast.present();
    }

    async LoadingSpinner() {
        const loading = await this.loadingController.create({
            spinner: null,
            message: 'Please wait...',
        });
        return await loading.present();
    }
}



export enum ToastType {
    SUCCESS = "success",
    WARNING = "warning",
    DANGER = "danger",
    MEDIUM = "medium"
}