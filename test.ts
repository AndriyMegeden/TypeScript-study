// const forms = document.querySelectorAll("form");
// const email = document.querySelector("#email") as HTMLInputElement;
// const title = document.querySelector("#title") as HTMLInputElement;
// const text = document.querySelector("#text") as HTMLTextAreaElement;
// const checkbox = document.querySelector("#checkbox") as HTMLInputElement;

// interface IFormData {
// 	email: string;
// 	title: string;
// 	text: string;
// 	checkbox: boolean;
// }

// const formData: IFormData = {
// 	email: "",
// 	title: "",
// 	text: "",
// 	checkbox: false,
// };

// forms.forEach((form)  => form.addEventListener("submit", (e) => {
//     e.preventDefault();
    
//     formData.email = email?.value ?? "";
// 	formData.title = title?.value ?? "";
// 	formData.text = text?.value ?? "";
// 	formData.checkbox = checkbox?.checked ?? false;

//     if (validateFormData(formData)) {
//         checkFormData(formData);
//     }
// }))


// function validateFormData (data: IFormData): boolean {
//     if(Object.values(data).every((value) => value)){
//         return true;
//     } else {
//         console.log('Заповніть всі поля')
//         return false
//     }
// }

// function checkFormData (data: IFormData) {
//     const {email} = data
//     const emails = ["example@gmail.com", "example@ex.com", "admin@gmail.com"]
//     if(emails.some((e) => e  === email)){
//         console.log("This email is already exist")
//     } else {
//         console.log('Записуєм дані...')
//     }
// }

// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// enum TransferStatus{
//     Pending = 'pending',
//     Rejected = 'rejected',
//     completed = 'completed'
// }


// enum ErrorMassage {
//     NotFound = '404',
//     NotEnought = '507',
//     Forbidden = '403'
// }

// interface Itransfer extends TransferError {
//     path: string;
//     data: string[];
//     date?: Date;
//     start: (p: string, d: string[]) => string;
//     stop: (reason: string) => string;
// }

// interface TransferError {
//     message: ErrorMassage;
// }


// class SingleFilterTransfer implements Itransfer, TransferError  {
//     path!: string;
//     data!: string[];
//     date?: Date | undefined;
//     message!: ErrorMassage;
//     transferStatus: TransferStatus;
 
//       constructor(status: TransferStatus) {
//         this.transferStatus = status;
//     }

//     start(p: string, d: string[]) {
//         return 'Transfer started'
//     }

//     checkTransferStatus = (): string => {
//         return this.transferStatus;
//     }

//     stop = (reason: string) => {
//         return `Transfer stopped, reason: ${reason}, Date: ${new Date().toLocaleString()}`
//     };

//     makeError = (): string => {
//         // Ведь при ошибке статус всегда "отклонено", правда?
//         return `Status: ${TransferStatus.Rejected}, error message: ${ErrorMassage.Forbidden}`
//     }
// }

// const transfer = new SingleFilterTransfer(TransferStatus.Pending);
// console.log(transfer.checkTransferStatus());
// console.log(transfer.stop('Test'));
// console.log(transfer.makeError());

