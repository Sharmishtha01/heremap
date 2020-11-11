import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';

declare var H: any;

@Component({
    selector: 'here-map',
    templateUrl: './here-map.component.html',
    styleUrls: ['./here-map.component.css']
})
export class HereMapComponent implements OnInit {

    @ViewChild("map")
    public mapElement: ElementRef;

    @Input()
    private _apikey: any;

    @Input()
    public lat: any;

    @Input()
    public lng: any;

    @Input()
    public width: any;

    @Input()
    public height: any;

    public constructor() { }

    public ngOnInit() { }

    public ngAfterViewInit() {
        let platform = new H.service.Platform({
            apikey: 'F_-F9OlqMt7OCOKfcsIW36I3ZQls0Hfr65is5z_GHpY'
        });
        let defaultLayers = platform.createDefaultLayers();
        let map = new H.Map(
            this.mapElement.nativeElement,
            defaultLayers.vector.normal.map,
            {
                zoom: 10,
                center: { lat: this.lat, lng: this.lng }
            }
        );
    }

}