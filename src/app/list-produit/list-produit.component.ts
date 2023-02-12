import { Component, OnInit } from '@angular/core';
import { Produit } from '../models/produit';

@Component({
  selector: 'app-list-produit',
  templateUrl: './list-produit.component.html',
  styleUrls: ['./list-produit.component.css']
})
export class ListProduitComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  listProduit=
  [
    {idProduit:1,code:"P147852P",libelle:"Produit1", prixUnitaire:12.5, tauxTVA:0.02},
    {idProduit:2,code:"P147552P",libelle:"Produit1", prixUnitaire:30, tauxTVA:0.1980},
    {idProduit:3,code:"D14785CC",libelle:"Produit1", prixUnitaire:20, tauxTVA:0.1980},
    {idProduit:4,code:"E147852P",libelle:"Produit1", prixUnitaire:50, tauxTVA:0.1980},
    {idProduit:5,code:"F147852P",libelle:"Produit1", prixUnitaire:70, tauxTVA:0.02},
    ]

  message:string;
  code:string;
    
    ajustertva(P:Produit) 
    { P.tauxTVA=0.2 ;
      if (P.tauxTVA=0.2) {
      this.message="TVA modifier";}
    return this.message; }

}
