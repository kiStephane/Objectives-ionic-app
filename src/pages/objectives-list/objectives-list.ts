import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { QueryResult, Select } from 'ng-db-helper';
import { ObjectiveDetailPage } from '../objective-detail/objective-detail';
import { Objective } from './../../core/models/objective';

@Component({
  selector: 'page-objectives-list',
  templateUrl: 'objectives-list.html'
})
export class ObjectivesListPage implements OnInit {
  public items = <Objective[]>[];

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public alertCtrl: AlertController) {
  }

  public ngOnInit(): void {
    this.loadObjectives();
  }

  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(ObjectiveDetailPage, {
      item: item
    });
  }

  deleteObjective(event, item: Objective){
    event.stopPropagation();
    let confirm = this.alertCtrl.create({
      title: 'Supprimer cet objectif',
      message: 'Voulez-vous supprimer cet objectif définitivement?',
      buttons: [
        {
          text: 'Annuler',
          handler: () => {
          }
        },
        {
          text: 'Supprimer',
          handler: () => {
            var index = this.items.indexOf(item, 0);
            if (index > -1) {
              this.items.splice(index, 1);
            }
          }
        }
      ]
    });
    confirm.present();
  }

  addObjective(){
    let prompt = this.alertCtrl.create({
    title: 'Nouvel Objectif',
    message: "Entrer le titre et la description de votre objectif",
    inputs: [
      {
        name: 'title',
        placeholder: 'Title'
      },
      {
        name: 'description',
        placeholder: 'Description'
      }
    ],
    buttons: [
      {
        text: 'Annuler',
        handler: data => {
        }
      },
      {
        text: 'Enregistrer',
        handler: data => {
          var o = new Objective()
          o.title = data.title
          o.description = data.description
          o.save().subscribe(() => {
            this.items.push(o);
          }, (err) => {
            console.error(err);
          });
        }
      }
    ]
    });
    prompt.present();
  }

  private loadObjectives() {
    Select(Objective).exec().subscribe((qr: QueryResult<Objective>) => {
      this.items = qr.rows.toArray();
    }, (err: any) => {
      console.log(err);
    });
  }
}
