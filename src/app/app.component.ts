import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular-Pipes';

  title1 = 'product details';
  productCode = 'p1001';
  productName = 'Iphone 13';
  productPrice = 217021;
  purchaseDate = '10/4/2021';
  productTax = '0.1';
  productRating = 4.92;

  sortoption : String;

  ProductList: any =[
    { prodName:"TV", prodPrice:4500},
    {prodName:"Fridge", prodPrice : 2000},
    {prodName: "Mobile", prodPrice:800},
    {prodName: "Car", prodPrice: 50000},
    {prodName: "Bike", prodPrice:300},
    {prodName: "AC", prodPrice:700}
  ];
}
