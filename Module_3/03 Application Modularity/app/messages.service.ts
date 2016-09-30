import {Injectable} from '@angular/core';

@Injectable()
export class MessageService{
    getErrorMessage() : string{
        return "Issue Ocurred";
    }

    getSuccessMessage() : string{
        return "Success";
    }
}