# Echo Tech Challenge

## How to Use

To install the correct files:

```
$ git clone https://github.com/sophieklm/echo-tech-challenge.git
$ cd echo-tech-challenge
$ npm install
```
To run tests, use either of the following commands:
```
$ jasmine
$ npm test
```
To run the functions with a list of drugs, input data into files/drugs.txt and use the following command in the terminal:
```
$ node main.js
```
Or run each function individually with node in terminal:
```
$ node
$ var formExtractor = require('./src/getForm')
$ formExtractor.getForm('Evening primrose oil 20% cream')
$ var strengthExtractor = require('./src/getStrength')
$ strengthExtractor.getStrength(`Candesartan 4mg/5ml oral solution`)
```

## The Task

We use a large data set called the DM&D (Dictionary of Medicines and Devices) which contains all the medication we can offer to patients. At the bottom of this file is a small list of drug names from that data set you can use for testing your solution to this challenge.

The challenge is to write two functions for extracting data from these names. You can do this in the programming language of your choice. Please share the solution as either a git repo or a .zip file.

#### 1. `getForm` function
Write a function called `getForm` that takes a single argument, the name of a drug, and return the form that this drug comes in. For example for `Evening primrose oil 20% cream` the function should return `cream`. The possible forms are:

* tablets
* oral solution
* cream
* eye drops
* vials
* spray

**Example**
```js
getForm('Evening primrose oil 20% cream'); // 'cream'
```

#### 2. `getStrength` function
Write a function called `getStrength` that takes a single argument, the name of a drug, and return an object containing data about the strength. For example for the name `Oxcarbazepine 600mg tablets` this function should return:

```
{
  numerator_value: 600,
  numerator_unit: 'mg',
  denominator_value: null,
  demoninator_unit: null
}
```

An example where `denominator_value` and `denominator_unit` would be filled in would be for `Candesartan 4mg/5ml oral solution` where the response should be:

```
{
  numerator_value: 4,
  numerator_unit: 'mg',
  denominator_value: 5,
  demoninator_unit: 'ml;
}
```

#### 3. Tests
Write tests for both the previous functions that show that they work correctly.

#### Drug names
```
NatraHealth Glucosamine sulfate 1500mg tablets
Natragen Glucosamine sulfate 1500mg tablets
NatraVits Vitamin B Complex tablets
Sumatriptan 100mg tablets
Sumatriptan 50mg tablets
Glucosamine sulfate 500mg tablets
Glucosamine sulfate 750mg tablets
Glucosamine sulfate 1.5g tablets
Oxcarbazepine 150mg tablets
Oxcarbazepine 300mg tablets
Oxcarbazepine 600mg tablets
Ademetionine 200mg tablets
Albendazole 400mg chewable tablets
Calcium acetate 500mg tablets
Chlorothiazide 250mg tablets
Cyclophosphamide 25mg tablets
Lisinopril 14mg/5ml oral solution
Indometacin 5mg/5ml oral solution
Candesartan 4mg/5ml oral solution
Evening primrose oil 20% cream
Betnovate 0.1% cream
Aveeno Intense Relief hand cream
Lactic acid 10% in Aqueous cream
Menthol 5% in Aqueous cream
Eumovate 0.05% cream
Athlete Foot 1% cream
Aciclovir 5% cream
Aqueous cream
Betamethasone valerate 0.1% cream
Dorzolamide 2% eye drops
Opticrom Hayfever 2% eye drops
Dorzolamide 2% eye drops
Dorzolamide 2% eye drops
Acetylcysteine 5% eye drops
Polyvinyl alcohol 1.4% eye drops
Ethyl chloride spray 50ml vials
Ethyl chloride spray 100ml vials
Ibuprofen 5% spray
```
