import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

import { Audit,User } from '@/_models';
import { AuditService, AuthenticationService } from '@/_services';

@Component({ templateUrl: 'audit.component.html' })
export class AuditComponent implements OnInit
{
    audits = [];
    currentUser: User;
    constructor(
        private authenticationService: AuthenticationService,
        private auditService: AuditService
    )
    {
        this.currentUser = this.authenticationService.currentUserValue;
    }

    ngOnInit()
    {
        this.loadAllAudits();
    }

    private loadAllAudits()
    {
        this.auditService.getAll()
            .pipe(first())
            .subscribe(audits => this.audits = audits);
    }

    private onOptionsSelected(val) {
        if(val == "12") {
            this.convertTo12();
        }
        else {
            this.convertTo24();
        }
    }
    convertTo12(){

    }
    convertTo24(){

    }
}