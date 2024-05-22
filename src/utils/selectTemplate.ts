import { rejectionMade, acceptanceMade, cancellationMade, requestMade, requestReceived, rejectionReceived, acceptanceReceived, cancellationReceived } from "src/modules/sendgrid/templates/body";

export type BodyConstructor = (senderName: string, receiverName: string) => string;

export const selectTemplate = (topic : string): BodyConstructor => {
    const dictionaryOfTemplates = {
        'rejected': rejectionMade,
        'accepted': acceptanceMade,
        'canceled': cancellationMade,
        'requested': requestMade,
        'requestedReceived': requestReceived,
        'rejectedReceived': rejectionReceived,
        'acceptedReceived': acceptanceReceived,
        'canceledReceived': cancellationReceived
    }
    return dictionaryOfTemplates[topic] || null;
} 

export const selectSubject = (subject: string) => {
    const dictionaryOfSubjects = {
        "rejected": `Your reject is completed`,
        'accepted':'Your confirmation has been sent!',
        "canceled":`You have successfully canceled your request`,
        "requested":`Your appointment has been requested`,
        'requestedReceived': 'You have received a new appointment request',
        "acceptedReceived":`Congratulations! Your request was approved.`,
        'rejectedReceived':'Your Appointment has been rejected',
        'canceledReceived':'Your request has been canceled',
    }
    return dictionaryOfSubjects[subject] || null;
}