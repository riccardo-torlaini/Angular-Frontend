import {Component, OnInit} from '@angular/core';
import {ActivitiesService} from "../../services/activities/activities.service";
import {Title} from "@angular/platform-browser";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    providers: [ActivitiesService],
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    public acts: any[];
    public loading: boolean;

    constructor(titleService: Title,
                private activitiesService: ActivitiesService) {
        this.loading = true;

        titleService.setTitle("Home");

        this.acts = [];
    }

    // JQUERY code to enable the scroll animation triggering
    // must embed to angularjs later
    check_if_in_view(): void {
        const $animationElements = $('.animation-element');
        const windowHeight = $(window).height();
        const windowTopPosition = $(window).scrollTop();
        const windowBottomPosition = (windowTopPosition + windowHeight);

        $.each($animationElements, function(): void {
            const $element = $(this);
            const elementHeight = $element.outerHeight();
            const elementTopPosition = $element.offset().top;
            const elementBottomPosition = (elementTopPosition + elementHeight);

            // check to see if this current container is within viewport
            if ((elementBottomPosition >= windowTopPosition) &&
                (elementTopPosition <= windowBottomPosition)) {
                $element.addClass('in-view');
            } else {
                $element.removeClass('in-view');
            }
        });
    }

    ngOnInit(): void {
        $(window).on('scroll resize', this.check_if_in_view);
        $(window).trigger('scroll');

        this.activitiesService.getAll().subscribe((activities: any[]) => {

                // getting the first 3 published activities
                for (const activity of activities) {
                    if (activity.published) {
                        this.acts.push(activity);
                    }

                    if (this.acts.length >= 3) {
                        break;
                    }
                }
            }
        );

        // initialize turn js magazine
        // @ts-ignore
        $("#magazine").turn({
            width: 420,
            height: 300,
            autoCenter: true
        });

        this.loading = false;
    }

}
