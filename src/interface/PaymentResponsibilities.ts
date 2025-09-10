export interface PaymentResponsibility { 
  paymentResponsibility : string   
}

export interface PaymentResponsibilityResponse { 
    data : { 
        success : boolean,
        message : string ,
        data : PaymentResponsibility[]
    }
}