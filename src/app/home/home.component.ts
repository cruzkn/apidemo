import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Component } from '@angular/core';

import { User } from '@app/_models';
import { Table } from '../_models/table';
import { AccountService } from '@app/_services';
import { TabledataService } from '../_services/tabledata.service';


@Component({ templateUrl: 'home.component.html', styleUrls: ['home.component.css'] })
export class HomeComponent {
    user: User;
    tableData;
    tableColumns: any[];
    dummyURL = 'https://mocki.io/v1/02c8b7c9-5020-4304-9d3f-967aaf9aa2cc';

    constructor(private accountService: AccountService, private dataService: TabledataService) {
        this.user = this.accountService.userValue;
    }

    showData(newURL){
        // alert('showdata calld');
        const self = this;
        const dataURL = (newURL ? newURL :  self.dummyURL);
        // console.log(dataURL);
        this.dataService.getAll(dataURL).subscribe((data) => {
            // console.log(data);
            // tslint:disable-next-line: no-string-literal
            self.tableData = data['products'];
            // console.log(self.tableData)
            self.tableColumns = Object.keys(self.tableData[0]);
            // console.log(self.tableColumns);
          });
        }

}
