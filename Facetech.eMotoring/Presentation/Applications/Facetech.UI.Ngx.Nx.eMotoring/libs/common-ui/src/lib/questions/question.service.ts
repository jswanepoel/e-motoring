import { Injectable } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { QuestionsContainer, FormCreator, DependentOption } from './question-base.component';
import { of, Observable } from 'rxjs';
import { delay } from 'rxjs/internal/operators';
import { QuestionTypeNamespace } from './question-types/question-types.component';

@Injectable()
export class QuestionService {
  
  public getMultiOptions(optionsKey: string): SelectItem[] {
    let multiOptions: SelectItem[];
    switch (optionsKey) {
      case 'paymentTypes': {
        multiOptions =
          [
            { value: 'COR', label: 'COR' },
            { value: 'VIC', label: 'VIC' },
            { value: 'OTHER', label: 'Other' }
          ];
        break;
      }
      case 'feeTypes': {
        multiOptions =
          [
            { value: '0', label: 'Registration Fees' },
            { value: '1', label: 'Transfer Fees' },
            { value: '2', label: 'Inspections' },
            { value: '3', label: 'Number Plates(a fee will be charged per plate)' },
            { value: '4', label: 'Luxury Tax' },
            { value: '5', label: 'Special Registration Number Fee' },
            { value: '6', label: 'Attribute Changes' },
            { value: '7', label: 'Enquiry / Extraction of Information' },
            { value: '8', label: 'Permit Tax' },
            { value: '9', label: 'Sales Tax' }

          ];
        break;
      }
      case 'IDTypes': {
        multiOptions =
          [
            { value: 'newNIC', label: 'NIC' },
            { value: 'businessRegistartionNo', label: 'Business Registartion No' },
            { value: 'passportNumber', label: 'Passport Number' }
          ];
        break;
      }
      case 'numberplateOptions': {
        multiOptions =
          [
            { value: 'keepExisting', label: 'Keep existing number' },
            { value: 'allocateNext', label: 'Allocate next number in range' },
            { value: 'requestSpecial', label: 'Request special number' }
          ];
        break;
      }
      case 'IdMaskTypes': {
        multiOptions =
          [
            { value: '*****PN********', label: 'passportNumber' },
            { value: '*****BR********', label: 'businessRegistartionNo' },
            { value: '*****NN********', label: 'newNIC' }
          ];
        break;
      }
      case 'ownerTypes': {
        multiOptions =
          [
            { value: 'embassy', label: 'Embassy' },
            { value: 'privateIndividual', label: 'Private individual' },
            { value: 'government', label: 'Government' }
          ];
        break;
      }
      case 'communicationMethods': {
        multiOptions =
          [
            { value: 'mobile', label: 'Mobile' },
            { value: 'email', label: 'Email' }
          ];
        break;
      }
      case 'cities': {
        multiOptions =
          [
            { value: '1', label: 'New York' },
            { value: '2', label: 'Los Angeles' },
            { value: '3', label: 'Chicago' },
            { value: '4', label: 'Houston' },
            { value: '5', label: 'Philadelphia' },
            { value: '6', label: 'Phoenix' },
            { value: '7', label: 'San Antonio' },
            { value: '8', label: 'San Diego' },
            { value: '9', label: 'Dallas' },
            { value: '10', label: 'Boston' }
          ];
        break;
      }
      case 'aga': {
        multiOptions =
          [
            { value: null, label: 'Select AGA' },
            { value: '1', label: '1234567' },
            { value: '2', label: '2345678' },
            { value: '3', label: '3456789' },
            { value: '4', label: '4567890' }
          ];
        break;
      }
      case 'countries': {
        multiOptions =
          [
            { value: 'tmp', label: 'Afghanistan' }, { value: 'tmp', label: 'Albania' }, { value: 'tmp', label: 'Algeria' }, { value: 'tmp', label: 'American Samoa' },
            { value: 'tmp', label: 'Andorra' }, { value: 'tmp', label: 'Angola' }, { value: 'tmp', label: 'Anguilla' }, { value: 'tmp', label: 'Antarctica' },
            { value: 'tmp', label: 'Antigua and Barbuda' }, { value: 'tmp', label: 'Argentina' }, { value: 'tmp', label: 'Armenia' }, { value: 'tmp', label: 'Aruba' },
            { value: 'tmp', label: 'Australia' }, { value: 'tmp', label: 'Austria' }, { value: 'tmp', label: 'Azerbaijan' }, { value: 'tmp', label: 'Bahamas' },
            { value: 'tmp', label: 'Bahrain' }, { value: 'tmp', label: 'Bangladesh' }, { value: 'tmp', label: 'Barbados' }, { value: 'tmp', label: 'Belarus' },
            { value: 'tmp', label: 'Belgium' }, { value: 'tmp', label: 'Belize' }, { value: 'tmp', label: 'Benin' }, { value: 'tmp', label: 'Bermuda' },
            { value: 'tmp', label: 'Bhutan' }, { value: 'tmp', label: 'Bolivia' }, { value: 'tmp', label: 'Bosnia and Herzegowina' }, { value: 'tmp', label: 'Botswana' },
            { value: 'tmp', label: 'Bouvet Island' }, { value: 'tmp', label: 'Brazil' }, { value: 'tmp', label: 'British Indian Ocean Territory' },
            { value: 'tmp', label: 'Brunei Darussalam' }, { value: 'tmp', label: 'Bulgaria' }, { value: 'tmp', label: 'Burkina Faso' }, { value: 'tmp', label: 'Burundi' },
            { value: 'tmp', label: 'Cambodia' }, { value: 'tmp', label: 'Cameroon' }, { value: 'tmp', label: 'Canada' }, { value: 'tmp', label: 'Cape Verde' },
            { value: 'tmp', label: 'Cayman Islands' }, { value: 'tmp', label: 'Central African Republic' }, { value: 'tmp', label: 'Chad' }, { value: 'tmp', label: 'Chile' },
            { value: 'tmp', label: 'China' }, { value: 'tmp', label: 'Christmas Island' }, { value: 'tmp', label: 'Cocos (Keeling) Islands' }, { value: 'tmp', label: 'Colombia' },
            { value: 'tmp', label: 'Comoros' }, { value: 'tmp', label: 'Congo' }, { value: 'tmp', label: 'Congo, the Democratic Republic of the' },
            { value: 'tmp', label: 'Cook Islands' }, { value: 'tmp', label: 'Costa Rica' }, { value: 'tmp', label: 'Cote dIvoire' }, { value: 'tmp', label: 'Croatia(Hrvatska)' },
            { value: 'tmp', label: 'Cuba' },
            { value: 'tmp', label: 'Cyprus' }, { value: 'tmp', label: 'Czech Republic' }, { value: 'tmp', label: 'Denmark' }, { value: 'tmp', label: 'Djibouti' },
            { value: 'tmp', label: 'Dominica' }, { value: 'tmp', label: 'Dominican Republic' }, { value: 'tmp', label: 'East Timor' }, { value: 'tmp', label: 'Ecuador' },
            { value: 'tmp', label: 'Egypt' }, { value: 'tmp', label: 'El Salvador' }, { value: 'tmp', label: 'Equatorial Guinea' }, { value: 'tmp', label: 'Eritrea' },
            { value: 'tmp', label: 'Estonia' }, { value: 'tmp', label: 'Ethiopia' }, { value: 'tmp', label: 'Falkland Islands(Malvinas)' },
            { value: 'tmp', label: 'Faroe Islands' }, { value: 'tmp', label: 'Fiji' }, { value: 'tmp', label: 'Finland' }, { value: 'tmp', label: 'France' },
            { value: 'tmp', label: 'France Metropolitan' }, { value: 'tmp', label: 'French Guiana' }, { value: 'tmp', label: 'French Polynesia' },
            { value: 'tmp', label: 'French Southern Territories' }, { value: 'tmp', label: 'Gabon' }, { value: 'tmp', label: 'Gambia' },
            { value: 'tmp', label: 'Georgia' }, { value: 'tmp', label: 'Germany' }, { value: 'tmp', label: 'Ghana' }, { value: 'tmp', label: 'Gibraltar' },
            { value: 'tmp', label: 'Greece' }, { value: 'tmp', label: 'Greenland' }, { value: 'tmp', label: 'Grenada' }, { value: 'tmp', label: 'Guadeloupe' },
            { value: 'tmp', label: 'Guam' }, { value: 'tmp', label: 'Guatemala' }, { value: 'tmp', label: 'Guinea' }, { value: 'tmp', label: 'Guinea - Bissau' },
            { value: 'tmp', label: 'Guyana' }, { value: 'tmp', label: 'Haiti' }, { value: 'tmp', label: 'Heard and Mc Donald Islands' },
            { value: 'tmp', label: 'Holy See(Vatican City State)' }, { value: 'tmp', label: 'Honduras' }, { value: 'tmp', label: 'Hong Kong' }, { value: 'tmp', label: 'Hungary' },
            { value: 'tmp', label: 'Iceland' }, { value: 'tmp', label: 'India' }, { value: 'tmp', label: 'Indonesia' }, { value: 'tmp', label: 'Iran(Islamic Republic of)' },
            { value: 'tmp', label: 'Iraq' }, { value: 'tmp', label: 'Ireland' }, { value: 'tmp', label: 'Israel' }, { value: 'tmp', label: 'Italy' }, { value: 'tmp', label: 'Jamaica' },
            { value: 'tmp', label: 'Japan' }, { value: 'tmp', label: 'Jordan' }, { value: 'tmp', label: 'Kazakhstan' }, { value: 'tmp', label: 'Kenya' },
            { value: 'tmp', label: 'Kiribati' }, { value: 'tmp', label: 'Korea, Democratic Peoples Republic of' }, { value: 'tmp', label: 'Korea, Republic of' },
            { value: 'tmp', label: 'Kuwait' }, { value: 'tmp', label: 'Kyrgyzstan' }, { value: 'tmp', label: 'Lao, People Democratic Republic' },
            { value: 'tmp', label: 'Latvia' }, { value: 'tmp', label: 'Lebanon' }, { value: 'tmp', label: 'Lesotho' }, { value: 'tmp', label: 'Liberia' },
            { value: 'tmp', label: 'Libyan Arab Jamahiriya' }, { value: 'tmp', label: 'Liechtenstein' }, { value: 'tmp', label: 'Lithuania' },
            { value: 'tmp', label: 'Luxembourg' }, { value: 'tmp', label: 'Macau' }, { value: 'tmp', label: 'Macedonia, The Former Yugoslav Republic of' },
            { value: 'tmp', label: 'Madagascar' }, { value: 'tmp', label: 'Malawi' }, { value: 'tmp', label: 'Malaysia' }, { value: 'tmp', label: 'Maldives' },
            { value: 'tmp', label: 'Mali' }, { value: 'tmp', label: 'Malta' }, { value: 'tmp', label: 'Marshall Islands' }, { value: 'tmp', label: 'Martinique' },
            { value: 'tmp', label: 'Mauritania' }, { value: 'tmp', label: 'Mauritius' }, { value: 'tmp', label: 'Mayotte' }, { value: 'tmp', label: 'Mexico' },
            { value: 'tmp', label: 'Micronesia, Federated States of' }, { value: 'tmp', label: 'Moldova, Republic of' }, { value: 'tmp', label: 'Monaco' },
            { value: 'tmp', label: 'Mongolia' }, { value: 'tmp', label: 'Montserrat' }, { value: 'tmp', label: 'Morocco' }, { value: 'tmp', label: 'Mozambique' },
            { value: 'tmp', label: 'Myanmar' }, { value: 'tmp', label: 'Namibia' }, { value: 'tmp', label: 'Nauru' }, { value: 'tmp', label: 'Nepal' },
            { value: 'tmp', label: 'Netherlands' }, { value: 'tmp', label: 'Netherlands Antilles' }, { value: 'tmp', label: 'New Caledonia' },
            { value: 'tmp', label: 'New Zealand' }, { value: 'tmp', label: 'Nicaragua' }, { value: 'tmp', label: 'Niger' }, { value: 'tmp', label: 'Nigeria' },
            { value: 'tmp', label: 'Niue' }, { value: 'tmp', label: 'Norfolk Island' }, { value: 'tmp', label: 'Northern Mariana Islands' },
            { value: 'tmp', label: 'Norway' }, { value: 'tmp', label: 'Oman' }, { value: 'tmp', label: 'Pakistan' }, { value: 'tmp', label: 'Palau' },
            { value: 'tmp', label: 'Panama' }, { value: 'tmp', label: 'Papua New Guinea' }, { value: 'tmp', label: 'Paraguay' }, { value: 'tmp', label: 'Peru' },
            { value: 'tmp', label: 'Philippines' }, { value: 'tmp', label: 'Pitcairn' }, { value: 'tmp', label: 'Poland' }, { value: 'tmp', label: 'Portugal' },
            { value: 'tmp', label: 'Puerto Rico' }, { value: 'tmp', label: 'Qatar' }, { value: 'tmp', label: 'Reunion' }, { value: 'tmp', label: 'Romania' },
            { value: 'tmp', label: 'Russian Federation' }, { value: 'tmp', label: 'Rwanda' }, { value: 'tmp', label: 'Saint Kitts and Nevis' },
            { value: 'tmp', label: 'Saint Lucia' }, { value: 'tmp', label: 'Saint Vincent and the Grenadines' }, { value: 'tmp', label: 'Samoa' },
            { value: 'tmp', label: 'San Marino' }, { value: 'tmp', label: 'Sao Tome and Principe' }, { value: 'tmp', label: 'Saudi Arabia' },
            { value: 'tmp', label: 'Senegal' }, { value: 'tmp', label: 'Seychelles' }, { value: 'tmp', label: 'Sierra Leone' }, { value: 'tmp', label: 'Singapore' },
            { value: 'tmp', label: 'Slovakia(Slovak Republic)' }, { value: 'tmp', label: 'Slovenia' }, { value: 'tmp', label: 'Solomon Islands' },
            { value: 'tmp', label: 'Somalia' }, { value: 'tmp', label: 'South Africa' }, { value: 'tmp', label: 'South Georgia and the South Sandwich Islands' },
            { value: 'tmp', label: 'Spain' }, { value: 'tmp', label: 'Sri Lanka' }, { value: 'tmp', label: 'St.Helena' }, { value: 'tmp', label: 'St.Pierre and Miquelon' },
            { value: 'tmp', label: 'Sudan' }, { value: 'tmp', label: 'Suriname' }, { value: 'tmp', label: 'Svalbard and Jan Mayen Islands' },
            { value: 'tmp', label: 'Swaziland' }, { value: 'tmp', label: 'Sweden' }, { value: 'tmp', label: 'Switzerland' }, { value: 'tmp', label: 'Sri Lanka' },
            { value: 'tmp', label: 'Syrian Arab Republic' }, { value: 'tmp', label: 'Taiwan, Province of China' }, { value: 'tmp', label: 'Tajikistan' },
            { value: 'tmp', label: 'Tanzania, United Republic of' }, { value: 'tmp', label: 'Thailand' }, { value: 'tmp', label: 'Togo' },
            { value: 'tmp', label: 'Tokelau' }, { value: 'tmp', label: 'Tonga' }, { value: 'tmp', label: 'Trinidad and Tobago' }, { value: 'tmp', label: 'Tunisia' },
            { value: 'tmp', label: 'Turkey' }, { value: 'tmp', label: 'Turkmenistan' }, { value: 'tmp', label: 'Turks and Caicos Islands' },
            { value: 'tmp', label: 'Tuvalu' }, { value: 'tmp', label: 'Uganda' }, { value: 'tmp', label: 'Ukraine' }, { value: 'tmp', label: 'United Arab Emirates' },
            { value: 'tmp', label: 'United Kingdom' }, { value: 'tmp', label: 'United States' }, { value: 'tmp', label: 'United States Minor Outlying Islands' },
            { value: 'tmp', label: 'Uruguay' }, { value: 'tmp', label: 'Uzbekistan' }, { value: 'tmp', label: 'Vanuatu' }, { value: 'tmp', label: 'Venezuela' },
            { value: 'tmp', label: 'Vietnam' }, { value: 'tmp', label: 'Virgin Islands(British)' }, { value: 'tmp', label: 'Virgin Islands(U.S.)' },
            { value: 'tmp', label: 'Wallis and Futuna Islands' }, { value: 'tmp', label: 'Western Sahara' }, { value: 'tmp', label: 'Yemen' },
            { value: 'tmp', label: 'Yugoslavia' }, { value: 'tmp', label: 'Zambia' }, { value: 'tmp', label: 'Zimbabwe' }
          ];
        break;
      }
      case 'provinces': {
        multiOptions =
          [
            { value: '1', label: 'Northern' },
            { value: '2', label: 'North Western' },
            { value: '3', label: 'Western' },
            { value: '4', label: 'North Central' },
            { value: '5', label: 'Central' },
            { value: '6', label: 'Sabaragamuwa' },
            { value: '7', label: 'Eastern' },
            { value: '8', label: 'Uva' },
            { value: '9', label: 'Southern' }
          ];
        break;
      }
      case 'color': {
        multiOptions =
          [
          { value: 'red', label: 'Red' },
          { value: 'yellow', label: 'Yellow' },
          { value: 'white', label: 'White' },
          { value: 'blue', label: 'Blue' },
          { value: 'green', label: 'Green' }
          ]; break;
      }
      case 'titles': {
        multiOptions =
          [
            { value: 'tmp', label: 'Mr.' },
            { value: 'tmp', label: 'Mnr' },
            { value: 'tmp', label: 'Miss' },
            { value: 'tmp', label: 'Mrs.' },
            { value: 'tmp', label: 'Ms.' }
          ]; break;
      }
      case 'genders': {
        multiOptions = [
          { value: 'male', label: 'Male' },
          { value: 'female', label: 'Female' },
          { value: 'unknown', label: 'Unknown' }];
        break;
      }
      case 'usageTypes': {
        multiOptions = [
          { value: '1', label: 'Business' },
          { value: '2', label: 'Private' }
        ];
        break;
      }
      case 'notificationTypes': {
        multiOptions = [
          { value: '0', label: 'SMS' },
          { value: '1', label: 'Email' }
        ];
        break;
      }
      case 'transactionTypes': {
        multiOptions = [
          { value: '1', label: 'Cash' },
          { value: '2', label: 'EFT' },
          { value: '3', label: 'Other' }];
        break;
      }
      case 'entityTypes': {
        multiOptions = [
          { value: '1', label: 'Importer' },
          { value: '2', label: 'Agent' },
          { value: '3', label: 'Manufacturer' },
          { value: '4', label: 'Garage' },
          { value: '5', label: 'Revenue Licence Issuing Authority' },
          { value: '6', label: 'Information Sharing Entity' },
          { value: '7', label: 'Vehicle Sales Centre' },
          { value: '8', label: 'Emission Test Centre' },
          { value: '9', label: 'Insurance Company' },
          { value: '10', label: 'Government Institution' },
          { value: '11', label: 'Bank/Finance Company' },
          { value: '12', label: 'Vehicle Owner' },
          { value: '13', label: 'Auctioning Authority' },
          { value: '14', label: 'Repairing Garages' },
          { value: '15', label: 'Institution' },
          { value: '16', label: 'Numberplate Manufacturer' }
        ];
        break;
      }
      case 'languages': {
        multiOptions = [
          { value: '1', label: 'English' },
          { value: '2', label: 'Afrikaans' }
        ];
        break;
      }
      case 'nationality': {
        multiOptions = [
          { value: '1', label: 'Sri Lanka' },
          { value: '2', label: 'Other' }
        ];
        break;
      }
      case 'districtCodes': {
        multiOptions = [
          { value: '1', label: '0001' },
          { value: '2', label: '0002' }
        ];
        break;
      }
      case 'vehicleAttributeMakes': {
        multiOptions = [
          { value: '1', label: 'BMW' },
          { value: '2', label: 'Mercedes' },
          { value: '3', label: 'Hyundai' },
          { value: '4', label: 'Maxda' }
        ];
        break;
      }
      case 'vehicleAttributeModels': {
        multiOptions = [
          { value: '1', label: '220i' },
          { value: '2', label: '320i' },
          { value: '3', label: '330i' },
          { value: '4', label: '525i' }
        ];
        break;
      }
      case 'vehicleAttributeClasses': {
        multiOptions = [
          { value: '1', label: 'Class 1' },
          { value: '2', label: 'Class 2' },
          { value: '3', label: 'Class 3' },
          { value: '4', label: 'Class 4' }
        ];
        break;
      }
      case 'vehicleAttributeDescriptions': {
        multiOptions = [
          { value: '1', label: 'aaa' },
          { value: '2', label: 'bbb' },
          { value: '3', label: 'ccc' },
          { value: '4', label: 'ddd' }
        ];
        break;
      }
      default:
    }
    return multiOptions;
  }

  public getQuestionDataFromDB(formName: string): QuestionsContainer {

    let formDefinition = new FormCreator(formName, true);
    formDefinition.container.questionDefinitions =
      JSON.parse(`[
      {
        "key": "identificationType",
        "label": "Identification Type",
        "optionsKey":"IDTypes",
        "componentType":"dropdown",
        "validators": 
          ["required"]
        ,
        "order": 1
      },
     {
        "key": "identificationNumber",
        "label": "Identification Number",
        "optionsKey":"IdMaskTypes",
        "validators": ["required"],
        "componentType":"inputMask",
        "defaultMask": "Waiting",
        "dependentOptions": [
          {
            "dependOnId": "identificationType",
            "attributes": [
              {
                "attrName": "mask",
                "conditions": [
                  {
                    "conditionVal": "passportNumber",
                    "onMatchSetTo": "passportNumber"
                  },
                  {
                    "conditionVal": "businessRegistartionNo",
                    "onMatchSetTo": "businessRegistartionNo"
                  },
                  {
                    "conditionVal": "newNIC",
                    "onMatchSetTo": "newNIC"
                  }
                ]
              },
                  {
                    "attrName": "hidden",
                    "conditions": [
                  {
                    "conditionVal": "businessRegistartionNo",
                    "onMatchSetTo": true
                  }
                ]
              }
            ]
          }
        ],
        "order": 2
      },
      {
        "key": "firstName",
        "label": "First name",
        "validators": ["required"],
        "order": 2,
        "componentType":"textbox",
        "errorText": " is required!"
      },
      {
        "key": "surname",
        "label": "Surname",
        "componentType":"textbox",
        "validators": ["required"],
        "order": 3,
        "errorText": " is required!"
      },
      {
        "key": "dateOfBirth",
        "label": "Date Of Birth",
        "validators": ["required"],
        "order": 4,
        "componentType":"date",
        "errorText": " is required!"
      },
     {
        "key": "nameOfInstitution",
        "label": "Name Of Institution",
        "order": 5,
        "componentType":"textbox",
        "errorText": " is required!"
      }
 
    ]`);

    //questionDefinition.forEach(question => {
    //  let qData = questionDefinition.find(qData => qData.questionKey == question.key) || false;
    //  question.selectItems = question.optionsKey ? this.getMultiOptions(question.optionsKey) : undefined;
    //  if (qData) {
    //    question.value = qData.value;
    //  }
    //});
    return formDefinition.container;
  }

  public getDefinition(definitionName: string, formName: string, role: string, isNew: boolean): QuestionsContainer {

    let formDefinition = new FormCreator(formName, isNew);
    let order: number = 1;

    if (definitionName == 'contact') {
    }
    else if (definitionName == 'lifeID') {
    }
    else if (definitionName == 'additionalVehicleInformation') {
      formDefinition.addQuestion(new QuestionTypeNamespace.TextboxQuestion(
        {
          key: 'vinNumber ',
          label: 'VIN number',
          errorText: ' is required.',
          order: order++,
          disabled: false
        },
        'text'
      )).addValidators('vinNumber', [['required']]);

      formDefinition.addQuestion(new QuestionTypeNamespace.TextboxQuestion(
        {
          key: 'engineNumber',
          label: 'Engine Number',
          errorText: ' is required.',
          order: order++,
          disabled: false
        },
        'text'
      )).addValidators('engineNumber', [['required']]);

      formDefinition.addQuestion(new QuestionTypeNamespace.DropdownQuestion(
        {
          key: 'color',
          label: 'Color',
          errorText: ' is required.',
          order: order++,
          disabled: false
        },
        'color',
        'Select Color',
        null
      )).addValidators('color', [['required']]);
    
    }
    else if (definitionName == 'lifeAddress') {

      formDefinition.addQuestion(new QuestionTypeNamespace.TextboxQuestion(
        {
          key: 'addressLine1',
          label: 'Address Line 1',
          errorText: ' is required.',
          order: order++,
          disabled: false
        },
        'text'
      )).addValidators('addressLine1', [['required']]);

      formDefinition.addQuestion(new QuestionTypeNamespace.TextboxQuestion(
        {
          key: 'addressLine2',
          label: 'Address Line 2',
          errorText: ' is required.',
          order: order++,
          disabled: false
        },
        'text'
      ));

      formDefinition.addQuestion(new QuestionTypeNamespace.TextboxQuestion(
        {
          key: 'postOffice',
          label: 'Post Office',
          errorText: ' is required.',
          order: order++,
          disabled: false
        },
        'text'
      )).addValidators('postOffice', [['required']]);

      formDefinition.addQuestion(new QuestionTypeNamespace.TextboxQuestion(
        {
          key: 'postalCode',
          label: 'Postal Code',
          errorText: ' is required.',
          order: order++,
          disabled: false
        },
        'text'
      )).addValidators('postalCode', [['required']]);

      formDefinition.addQuestion(new QuestionTypeNamespace.DropdownQuestion(
        {
          key: 'country',
          label: 'Country',
          errorText: ' is required.',
          order: order++,
          disabled: false
        },
        'countries',
        'Select Country',
        false
      )).addValidators('country', [['required']]);

    }
    else if (definitionName == 'idNumber') {

      formDefinition.addQuestion(new QuestionTypeNamespace.DropdownQuestion(
        {
          key: 'identificationType',
          label: 'Identification Type',
          errorText: ' is invalid',
          order: 2,
          disabled: false
        },
        'IDTypes',
        'Select ID Type',
        false
      )).addValidators('identificationType', [['required']]);

      formDefinition.addQuestion(new QuestionTypeNamespace.TextboxQuestion(
        {
          key: 'identificationNumber',
          label: 'Identification Number',
          errorText: ' is required!',
          order: 3,
          disabled: false
        },
        'text'
      ));
    }
    else if (definitionName == 'vehicleAttributes') {

      formDefinition.addQuestion(new QuestionTypeNamespace.DropdownQuestion(
        {
          key: 'vehicleAttributeMake',
          label: 'Make',
          errorText: ' is required.',
          order: order++,
          disabled: false
        },
        'vehicleAttributeMakes',
        'Select Make',
        true
      )).addValidators('vehicleAttributeMake', [['required']]);

      formDefinition.addQuestion(new QuestionTypeNamespace.TextboxQuestion(
        {
          key: 'otherVehicleAttributeMake',
          label: 'Other Make',
          errorText: '',
          order: order++,
          hidden: true
        },
        'text'
      )).addValidators('otherVehicleAttributeMake', [['required']]);

      let makeDependentOption: DependentOption[] = [{
        dependOnId: 'vehicleAttributeMake',
        attributes: [
          {
            attrName: 'hidden',
            conditions: [
              {
                conditionVal: '0',
                onMatchSetTo: false,
                onFailSetTo: true
              }
            ]
          }
        ]
      }];

      formDefinition.addGroupDependants('vehicleAttributeMakeDependent', {
        questionIds: [
          'otherVehicleAttributeMake' // Applied to
        ],
        dependentOptions: makeDependentOption
      });

      formDefinition.addQuestion(new QuestionTypeNamespace.DropdownQuestion(
        {
          key: 'vehicleAttributeModel',
          label: 'Model',
          errorText: ' is required.',
          order: order++,
          disabled: false
        },
        'vehicleAttributeModels',
        'Select Model',
        true
      )).addValidators('vehicleAttributeModel', [['required']]);

      formDefinition.addQuestion(new QuestionTypeNamespace.TextboxQuestion(
        {
          key: 'vehicleAttributeOtherModel',
          label: 'Other Model',
          errorText: '',
          order: order++,
          hidden: true
        },
        'text'
      )).addValidators('vehicleAttributeOtherModel', [['required']]);

      let modelDependentOption: DependentOption[] = [{
        dependOnId: 'vehicleAttributeModel',
        attributes: [
          {
            attrName: 'hidden',
            conditions: [
              {
                conditionVal: '0',
                onMatchSetTo: false,
                onFailSetTo: true
              }
            ]
          }
        ]
      }];

      formDefinition.addGroupDependants('vehicleAttributeModelDependent', {
        questionIds: [
          'vehicleAttributeOtherModel' // Applied to
        ],
        dependentOptions: modelDependentOption
      });

      formDefinition.addQuestion(new QuestionTypeNamespace.DropdownQuestion(
        {
          key: 'vehicleAttributeClass',
          label: 'Class',
          errorText: ' is required.',
          order: order++,
          disabled: false
        },
        'vehicleAttributeClasses',
        'Select Class',
        true
      )).addValidators('vehicleAttributeClass', [['required']]);

      formDefinition.addQuestion(new QuestionTypeNamespace.TextboxQuestion(
        {
          key: 'vehicleAttributeOtherClass',
          label: 'Other Class',
          errorText: '',
          order: order++,
          hidden: true
        },
        'text'
      )).addValidators('vehicleAttributeOtherClass', [['required']]);

      let vehicleAttributeClassDependentOption: DependentOption[] = [{
        dependOnId: 'vehicleAttributeClass',
        attributes: [
          {
            attrName: 'hidden',
            conditions: [
              {
                conditionVal: '0',
                onMatchSetTo: false,
                onFailSetTo: true
              }
            ]
          }
        ]
      }];

      formDefinition.addGroupDependants('vehicleAttributeClassDependent', {
        questionIds: [
          'vehicleAttributeOtherClass' // Applied to
        ],
        dependentOptions: vehicleAttributeClassDependentOption
      });

      formDefinition.addQuestion(new QuestionTypeNamespace.DropdownQuestion(
        {
          key: 'vehicleAttributeDescription',
          label: 'Description',
          errorText: ' is required.',
          order: order++,
          disabled: false
        },
        'vehicleAttributeDescriptions',
        'Select Description',
        true
      )).addValidators('vehicleAttributeDescription', [['required']]);

      formDefinition.addQuestion(new QuestionTypeNamespace.TextboxQuestion(
        {
          key: 'vehicleAttributeOtherDescription',
          label: 'Other Description',
          errorText: '',
          order: order++,
          hidden: true
        },
        'text'
      )).addValidators('vehicleAttributeOtherDescription', [['required']]);

      let vehicleAttributeDescriptionDependentOption: DependentOption[] = [{
        dependOnId: 'vehicleAttributeDescription',
        attributes: [
          {
            attrName: 'hidden',
            conditions: [
              {
                conditionVal: '0',
                onMatchSetTo: false,
                onFailSetTo: true
              }
            ]
          }
        ]
      }];

      formDefinition.addGroupDependants('vehicleAttributeDescriptionDependent', {
        questionIds: [
          'vehicleAttributeOtherDescription' // Applied to
        ],
        dependentOptions: vehicleAttributeDescriptionDependentOption
      });

    }
    else if (definitionName == 'entityDetail1') {

      formDefinition.addQuestion(new QuestionTypeNamespace.RadioQuestion(
        {
          key: 'privateBusinessType',
          label: 'Private Person/Business',
          errorText: ' is invalid.',
          order: order++,
          disabled: false
        },
        'usageTypes',
        'Select Type'
      )).addValidators('privateBusinessType', [['required']]);

      formDefinition.addQuestion(new QuestionTypeNamespace.DropdownQuestion(
        {
          key: 'nationality',
          label: 'Nationality',
          errorText: ' is required.',
          order: order++,
          disabled: false,
          value: '1'
        },
        'nationality',
        'Select Nationality',
        false
      )).addValidators('nationality', [['required']]);

      formDefinition.addQuestion(new QuestionTypeNamespace.TextboxQuestion(
        {
          key: 'entityName',
          label: 'Name',
          errorText: ' is required.',
          order: order++,
          disabled: false
        },
        'text'
      )).addValidators('entityName', [['required']]);

      formDefinition.addQuestion(new QuestionTypeNamespace.TextboxQuestion(
        {
          key: 'entityCellNumber',
          label: 'Cellphone Number',
          errorText: '',
          order: order++,
          disabled: false
        },
        'text'
      ));
    }
    else if (definitionName == 'entityDetail2') {

      formDefinition.addQuestion(new QuestionTypeNamespace.DropdownQuestion(
        {
          key: 'districtCodes',
          label: 'District Code',
          errorText: ' is required.',
          order: order++,
          disabled: false
        },
        'districtCodes',
        'Select District Code',
        false
      )).addValidators('districtCodes', [['required']]);

      formDefinition.addQuestion(new QuestionTypeNamespace.TextboxQuestion(
        {
          key: 'mainEntityNumber',
          label: 'Main Entity Number',
          errorText: ' is required.',
          order: order++,
          disabled: false
        },
        'text'
      )).addValidators('mainEntityNumber', [['required']]);

    }
    else if (definitionName == 'contactDetailForSiteVisit') {

      formDefinition.addQuestion(new QuestionTypeNamespace.TextboxQuestion(
        {
          key: 'contactName',
          label: 'Contact Name',
          errorText: ' is required.',
          order: order++,
          disabled: false
        },
        'text'
      )).addValidators('contactName', [['required']]);

      formDefinition.addQuestion(new QuestionTypeNamespace.TextboxQuestion(
        {
          key: 'contactPhoneNumber',
          label: 'Contact Phone Number',
          errorText: '',
          order: order++,
          disabled: false
        },
        'text'
      ));

      formDefinition.addQuestion(new QuestionTypeNamespace.TextboxQuestion(
        {
          key: 'contactEmail',
          label: 'Contact Email',
          errorText: '',
          order: order++,
          disabled: false
        },
        'text'
      ));

      formDefinition.addQuestion(new QuestionTypeNamespace.TextboxQuestion(
        {
          key: 'siteName',
          label: 'Site Name',
          errorText: '',
          order: order++,
          disabled: false
        },
        'text'
      ));

      formDefinition.addQuestion(new QuestionTypeNamespace.TextboxQuestion(
        {
          key: 'siteDescription',
          label: 'Site Description',
          errorText: '',
          order: order++,
          disabled: false
        },
        'text'
      ));

      formDefinition.addQuestion(new QuestionTypeNamespace.TextareaQuestion(
        {
          key: 'siteDirections',
          label: 'Directions',
          errorText: '',
          order: order++,
          disabled: false
        },
        '',
        100
      ));

    }
    else if (definitionName == 'siteVisitDetail') {
    }
    else if (definitionName == 'initialEntityRegistration') {

      formDefinition.addQuestion(new QuestionTypeNamespace.DropdownQuestion(
        {
          key: 'entityType',
          label: 'Entity Type',
          errorText: ' is required.',
          order: order++,
          disabled: false
        },
        'entityTypes',
        'Select Entity Type',
        false
      )).addValidators('entityType', [['required']]);

      formDefinition.addQuestion(new QuestionTypeNamespace.TextboxQuestion(
        {
          key: 'primeEmail',
          label: 'Prime Representative eMail',
          errorText: ' is required.',
          order: order++,
          disabled: false
        },
        'text'
      )).addValidators('primeEmail', [['required']]);

      formDefinition.addQuestion(new QuestionTypeNamespace.TextboxQuestion(
        {
          key: 'primeName',
          label: 'Prime Representative Name',
          errorText: ' is required.',
          order: order++,
          disabled: false
        },
        'text'
      )).addValidators('primeName', [['required']]);

      formDefinition.addQuestion(new QuestionTypeNamespace.TextboxQuestion(
        {
          key: 'primeSurname',
          label: 'Prime Representative Surname',
          errorText: ' is required.',
          order: order++,
          disabled: false
        },
        'text'
      )).addValidators('primeSurname', [['required']]);

      formDefinition.addQuestion(new QuestionTypeNamespace.TextboxQuestion(
        {
          key: 'primeCellNumber',
          label: 'Prime Representative Cellphone Number',
          errorText: ' is required.',
          order: order++,
          disabled: false
        },
        'text'
      )).addValidators('primeCellNumber', [['required']]);

      formDefinition.addQuestion(new QuestionTypeNamespace.DropdownQuestion(
        {
          key: 'preferredCommunicationChannel',
          label: 'Preferred Communication Channel',
          errorText: ' is required.',
          order: order++,
          disabled: false
        },
        'notificationTypes',
        'Select Preferred Communication Channel',
        false
      )).addValidators('preferredCommunicationChannel', [['required']]);

      formDefinition.addQuestion(new QuestionTypeNamespace.DropdownQuestion(
        {
          key: 'preferredLanguage',
          label: 'Preferred Language',
          errorText: ' is required.',
          order: order++,
          disabled: false
        },
        'languages',
        'Select Preferred Language',
        false
      )).addValidators('preferredLanguage', [['required']]);

    }
    else if (definitionName == 'additionalRegistration') {
      formDefinition.addQuestion(new QuestionTypeNamespace.RadioQuestion(
        {
          key: 'ownerType',
          label: 'Owner Type',
          errorText: ' is invalid',
          order: 1,
          disabled: false
        },
        'ownerTypes',
        null
      )).addValidators('ownerType', [['required']]);

      formDefinition.addQuestion(new QuestionTypeNamespace.DropdownQuestion(
        {
          key: 'identificationType',
          label: 'Identification Type',
          errorText: ' is invalid',
          order: 2,
          disabled: false
        },
        'IDTypes',
        'Select ID Type',
        false
      )).addValidators('identificationType', [['required']]);

      formDefinition.addQuestion(new QuestionTypeNamespace.TextboxQuestion(
        {
          key: 'identificationNumber',
          label: 'Identification Number',
          errorText: ' is required!',
          order: 3,
          disabled: false
        },
        'text'
      ));

      formDefinition.addQuestion(new QuestionTypeNamespace.TextboxQuestion(
        {
          key: 'travelDocumentNumber',
          label: 'Travel Document Number',
          errorText: ' is required!',
          order: 4,
          disabled: false,
          hidden: true
        },
        'number'
      )).addValidators('travelDocumentNumber', [['required']]);

      formDefinition.addQuestion(new QuestionTypeNamespace.DropdownQuestion(
        {
          key: 'travelDocumentIssueCountry',
          label: 'Travel Document Issue Country ',
          errorText: ' is invalid',
          order: 5,
          disabled: false,
          hidden: true
        },
        'countries',
        'Select Country',
        false
      )).addValidators('travelDocumentIssueCountry', [['required']]);

      formDefinition.addQuestion(new QuestionTypeNamespace.TextboxQuestion(
        {
          key: 'visaReferenceNumber',
          label: 'Visa Reference Number',
          errorText: ' is invalid',
          order: 6,
          disabled: false,
          hidden: true
        },
        'number'
      )).addValidators('visaReferenceNumber', [['required']]);

      formDefinition.addQuestion(new QuestionTypeNamespace.DropdownQuestion(
        {
          key: 'visaCategory',
          label: 'Visa Category',
          errorText: ' is invalid',
          order: 7,
          disabled: false,
          hidden: true
        },
        'countries',
        'Select Country',
        false
      )).addValidators('visaCategory', [['required']]);

      formDefinition.addQuestion(new QuestionTypeNamespace.DateQuestion(
        {
          key: 'VisaExpiryDate',
          label: 'Visa Expiry Date',
          errorText: ' is required!',
          order: 8,
          disabled: false,
          hidden: true
        },
        'pi pi-check'
      )).addValidators('VisaExpiryDate', [['required']]);

      formDefinition.addQuestion(new QuestionTypeNamespace.DropdownQuestion(
        {
          key: 'userTitle',
          label: 'Title',
          errorText: ' is invalid',
          order: 9,
          disabled: false
        },
        'titles',
        'Select Title',
        false
      )).addValidators;

      formDefinition.addQuestion(new QuestionTypeNamespace.DropdownQuestion(
        {
          key: 'userGender',
          label: 'Gender',
          errorText: ' is invalid',
          order: 10,
          disabled: false
        },
        'genders',
        'Select Gender',
        false
      )).addValidators('userGender', [['required']]);

      formDefinition.addQuestion(new QuestionTypeNamespace.DropdownQuestion(
        {
          key: 'citizenship',
          label: 'Citizenship',
          errorText: ' is invalid',
          order: 11,
          disabled: false
        },
        'countries',
        'Select Country',
        false
      )).addValidators('citizenship', [['required']]);

      formDefinition.addQuestion(new QuestionTypeNamespace.TextboxQuestion(
        {
          key: 'firstName',
          label: 'First name',
          errorText: ' is required!',
          order: 12,
          disabled: false
        },
        'string'
      )).addValidators('firstName', [['required']]);

      formDefinition.addQuestion(new QuestionTypeNamespace.TextboxQuestion(
        {
          key: 'companyName',
          label: 'Company name',
          errorText: ' is required!',
          order: 14,
          disabled: false,
          hidden: true
        },
        'string'
      )).addValidators('companyName', [['required']]);

      formDefinition.addQuestion(new QuestionTypeNamespace.TextboxQuestion(
        {
          key: 'businessRegistrationNumber',
          label: 'Business Registration Number',
          errorText: ' is required!',
          order: 15,
          disabled: false,
          hidden: true
        },
        'number'
      )).addValidators('businessRegistrationNumber', [['required']]);

      formDefinition.addQuestion(new QuestionTypeNamespace.TextboxQuestion(
        {
          key: 'surname',
          label: 'Surname',
          errorText: ' is required!',
          order: 16,
          disabled: false
        },
        'string'
      )).addValidators('surname', [['required']]);

      formDefinition.addQuestion(new QuestionTypeNamespace.DateQuestion({
        key: 'dateOfBirth',
        label: 'Birthdate',
        errorText: ' is required!',
        order: 17,
        disabled: false
      }, 'pi pi-check')).addValidators('dateOfBirth', [['required']]);

      formDefinition.addQuestion(new QuestionTypeNamespace.DropdownQuestion({
        key: 'province_cd',
        label: 'Province',
        errorText: ' is invalid',
        order: 18,
        disabled: false
      },
        'provinces',
        'Select Province',
        false
      )).addValidators('province_cd', [['required']]);

      formDefinition.addQuestion(new QuestionTypeNamespace.DropdownQuestion({
        key: 'city_cd',
        label: 'City',
        errorText: ' is invalid',
        order: 19,
        disabled: false
      },
        'cities',
        null,
        false
      )).addValidators('city_cd', [['required']]);

      formDefinition.addQuestion(new QuestionTypeNamespace.TextboxQuestion({
        key: 'address1',
        label: 'Address Line 1',
        errorText: ' is required!',
        order: 20,
        disabled: false
      }, 'text')).addValidators('address1', [['required']]);

      formDefinition.addQuestion(new QuestionTypeNamespace.TextboxQuestion({
        key: 'address2',
        label: 'Address Line 2',
        errorText: '',
        order: 21,
        disabled: false
      }, 'text'));

      let groupDepOp: DependentOption[] = [{
        dependOnId: 'identificationType',
        attributes: [
          {
            attrName: 'hidden',
            conditions: [
              {
                conditionVal: 'passportNumber',
                onMatchSetTo: false
              }
            ]
          }
        ]
      }];

      let groupDepOp4: DependentOption[] = [{
        dependOnId: 'identificationType',
        attributes: [
          {
            attrName: 'hidden',
            conditions: [
              {
                conditionVal: 'passportNumber',
                onMatchSetTo: false
              },
              {
                conditionVal: 'businessRegistartionNo',
                onMatchSetTo: false
              }
            ]
          }
        ]
      }];

      let groupDepOp2: DependentOption[] = [
        {
          dependOnId: 'ownerType',
          attributes: [
            {
              attrName: 'hidden',
              conditions: [
                {
                  conditionVal: 'embassy',
                  onMatchSetTo: true
                }
              ]
            }
          ]
        }];

      let groupDepOp3: DependentOption[] = [
        {
          dependOnId: 'ownerType',
          attributes: [
            {
              attrName: 'hidden',
              conditions: [
                {
                  conditionVal: 'embassy',
                  onMatchSetTo: false
                }
              ]
            }
          ]
        }];

      let identificationNumberDependencies = [
        {
          dependOnId: 'identificationType',
          attributes: [
            {
              attrName: 'mask',
              isBoundAttribute: true,
              conditions: [
                {
                  conditionVal: 'passportNumber',
                  onMatchSetTo: 'passportNumber'
                },
                {
                  conditionVal: 'businessRegistartionNo',
                  onMatchSetTo: 'businessRegistartionNo'
                },
                {
                  conditionVal: 'newNIC',
                  onMatchSetTo: 'newNIC'
                }
              ]
            },
            {
              attrName: 'hidden',
              conditions: [
                {
                  conditionVal: 'businessRegistartionNo',
                  onMatchSetTo: true
                }
              ]
            },
            {
              attrName: 'disabled',
              conditions: [
                {
                  conditionVal: 'undefined',
                  onMatchSetTo: true
                }
              ]
            }
          ]
        }
      ];

      formDefinition.addGroupDependants('foreigner', {
        questionIds: [
          'travelDocumentNumber',
          'travelDocumentIssueCountry',
          'visaReferenceNumber',
          'visaCategory',
          'VisaExpiryDate'
        ],
        dependentOptions: groupDepOp
      });

      formDefinition.addGroupDependants('other', {
        questionIds: [
          'identificationType',
          'identificationNumber',
          'userTitle',
          'citizenship',
          'userGender',
          'firstName',
          'surname',
          'dateOfBirth',
          'province_cd',
          'city_cd',
          'address1',
          'address2'
        ],
        dependentOptions: groupDepOp2
      });

      formDefinition.addGroupDependants('company', {
        questionIds: [
          'businessRegistrationNumber',
          'companyName'
        ],
        dependentOptions: groupDepOp3
      });
    }
    else if (definitionName == 'numberplateOptions') {
      formDefinition.addQuestion(new QuestionTypeNamespace.RadioQuestion(
        {
          key: 'numberplateOptions',
          label: 'Numberplate Options',
          errorText: ' is invalid',
          order: order++,
          disabled: false
        },
        'numberplateOptions'
      )).addValidators('numberplateOptions', [['required']]);
    }
    else if (definitionName == 'identifyVehicleAndOwner') {
      formDefinition.addQuestion(new QuestionTypeNamespace.TextboxQuestion(
        {
          key: 'vinNumber',
          label: 'Vin\\Chassis Number',
          errorText: '',
          order: order++,
          disabled: false
        },
        'text'
      ));

      formDefinition.addQuestion(new QuestionTypeNamespace.TextboxQuestion(
        {
          key: 'previousRegistrationNumber',
          label: 'Previous Registration Number',
          errorText: '',
          order: order++,
          disabled: false
        },
        'text'
      ));

      formDefinition.addQuestion(new QuestionTypeNamespace.TextboxQuestion(
        {
          key: 'currentRegistrationNumber',
          label: 'Current Registration Number',
          errorText: '',
          order: order++,
          disabled: false
        },
        'text'
      ));
    }
    else {

      formDefinition.addQuestion(new QuestionTypeNamespace.TextboxQuestion(
        {
          key: 'ownerNumber',
          label: 'Owner Number',
          errorText: ' is required!',
          order: order++,
          disabled: false
        },
        'number'
      )).addValidators('ownerNumber', [['required']]);

      formDefinition.addQuestion(new QuestionTypeNamespace.DropdownQuestion(
        {
          key: 'title_cd',
          label: 'Title',
          errorText: ' is invalid',
          order: order++,
          disabled: false
        },
        'titles',
        'Select Title',
        false
      )).addValidators('title_cd', [['required']]);

      formDefinition.addQuestion(new QuestionTypeNamespace.InputMaskQuestion(
        {
          key: 'identificationNumber',
          label: 'Identification Number',
          errorText: ' is required!',
          order: order++,
          disabled: false
        },
        'IdMaskTypes',
        null
      )).addValidators('identificationNumber', [['required']]);

      formDefinition.addQuestion(new QuestionTypeNamespace.RadioQuestion(
        {
          key: 'usage_cd',
          label: 'Usage',
          errorText: ' is invalid',
          order: order++,
          disabled: false
        },
        'usageTypes'
      )).addValidators('usage_cd', [['required']]);
    }

    return formDefinition.container;
  }

  public getQuestionData(): Observable<any> {
    let returnValue: any;
    returnValue = {
      identificationType: "newNIC",
      firstName: "Leslie",
      surname: "Berry",
      identificationNumber: "9205255252524"
    };

    return of(returnValue).pipe(delay(5000));
  }
}

export interface DBQuestionDataModel {
  questionKey: string,
  value: string,
  questionType: string,
  optionsKey?: string
}






//questions = [

//  new DropdownQuestion({
//    key: 'identificationType',
//    label: 'Identification Type',
//    selectItems: [
//      { value: 'newNIC', label: 'NIC' },
//      { value: 'businessRegistartionNo', label: 'Business Registartion No' },
//      { value: 'passportNumber', label: 'Passport Number' }
//    ],
//    validators: [Validators.required],
//    order: 3
//  }),

//  new TextboxQuestion({
//    key: 'firstName',
//    label: 'First name',
//    value: '',
//    validators: [Validators.required],
//    order: 1,
//    inValidText: ' is required!',
//    type: 'text'
//  }),
//  new TextboxQuestion({
//    key: 'surname',
//    label: 'Surname',
//    value: '',
//    validators: [Validators.required],
//    order: 2,
//    inValidText: ' is required!',
//    type: 'text'
//  }),

//  new InputMaskQuestion({
//    key: 'identificationNumber',
//    label: 'Identification Number',
//    validators: [Validators.required],
//    mask: 'defaultMask',
//    dependentOptions: [{
//      dependOnId: 'identificationType',
//      attributes: [{
//        attrName: 'mask',
//        conditions: [
//          { attrVal: '*****A*****', conditionVal: 'passportNumber' },
//          { attrVal: '*****B*****', conditionVal: 'businessRegistartionNo' },
//          { attrVal: '99999C999999*', conditionVal: 'newNIC' }]
//      }]
//    },
//    {
//      dependOnId: 'firstName',
//      attributes: [{
//        attrName: 'disabled',
//        conditions: [
//          { attrVal: 'true', conditionVal: 'true', controlPropName: 'valid' }
//        ]
//      }]
//    }
//    ],
//    order: 4
//  })
//];





  //   getTestQuestions() {

  //  let questions: QuestionBase<any>[] = [

  //    new DropdownQuestion({
  //      key: 'brave',
  //      label: 'Bravery Rating',
  //      options: [
  //        { key: 'solid', value: 'Solid' },
  //        { key: 'great', value: 'Great' },
  //        { key: 'good', value: 'Good' },
  //        { key: 'unproven', value: 'Unproven' }
  //      ],
  //      order: 3
  //    }),

  //    new TextboxQuestion({
  //      key: 'firstName',
  //      label: 'First name',
  //      value: 'Bombasto',
  //      validations: [Validators.required],
  //      order: 1,
  //      inValidText: 'This is required!'
  //    }),

  //    new TextboxQuestion({
  //      key: 'emailAddress',
  //      label: 'Email',
  //      type: 'email',
  //      validations: [Validators.required, Validators.email],
  //      order: 2
  //    })
  //  ];

  //  return questions.sort((a, b) => a.order - b.order);
  //}
//}
