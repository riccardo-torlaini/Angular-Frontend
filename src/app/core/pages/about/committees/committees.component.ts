import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
    selector: 'app-committees',
    templateUrl: './committees.component.html',
    styleUrls: ['./committees.component.css']
})
export class CommitteesComponent implements OnInit {

    private loading: boolean;
    committees;

    constructor(private activatedRoute: ActivatedRoute) {
        this.loading = true;
    }

    ngOnInit(): void {
        const committees = this.activatedRoute.snapshot.data.committees;

        /* Bind home page and the image to the committee template */
        committees.forEach((committee) => {
            committee.link = "/group/" + committee.id.toString();
            /* Image is under src/img/CommitteePictures/Committee_Name.jpg */
            committee.image = "./../../../../assets/img/CommitteePictures/"
                + committee.displayName.replace(/ /g, "_").toLowerCase() + ".jpg";
        });

        /* Bind committees to scope */
        this.committees = committees;

        this.loading = false;
    }

}
