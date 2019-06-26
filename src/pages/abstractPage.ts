import { ToastController, LoadingController } from '@ionic/angular';

export class abstractPage  {

    constructor(public toastController: ToastController, public loadingController: LoadingController) { }

    ngOnInit() {
    }

    async Toast(message: string, toastType: ToastType) {
        const toast = await this.toastController.create({
            message: message,            
            color : toastType,
            buttons: [
                {
                    text: 'Close',
                    role: 'cancel',
                }
            ]
        });
        toast.present();
    }

    async LoadingSpinner() {
        const loading = await this.loadingController.create({
            spinner: "circles"
        });
        loading.dismiss();
        return await loading.present()
            .then(() => {loading.dismiss();})
        
    }
}



export enum ToastType {
    SUCCESS = "success",
    WARNING = "warning",
    DANGER = "danger",
    MEDIUM = "medium"
}