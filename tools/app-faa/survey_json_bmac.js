// export { json };

 json = {
    "title": "AMA Rule Violation check",
    "logoPosition": "right",
    "pages": [
     {
      "name": "page1",
      "elements": [
       {
        "type": "boolean",
        "name": "has_prior_history_of_violation",
        "title": "Does the pilot have prior history of violations?",
        "isRequired": true
       }
      ],
      "title": "General AMA Rules  (1/10)",
      "description": "Does the pilot have prior history of violations?"
     },
     {
      "title": "General AMA Rules  (2/10)",   
      "name": "page2",
      "elements": [
       {
        "type": "boolean",
        "name": "aircrafts_nearby",
        "title": "Were there any aircrafts near the aircraft during its flight?",
        "isRequired": true
       },
       {
        "type": "boolean",
        "name": "yield_right_of_way",
        "visibleIf": "{aircrafts_nearby} = true",
        "title": "If so, did the pilot yield the right-of-way?",
        "isRequired": true
       },
       {
        "type": "boolean",
        "name": "used_spotter",
        "visibleIf": "{yield_right_of_way} = true",
        "title": "If so, did the pilot notify the operator in that circumstance?",
        "isRequired": true
       }
      ]
     },
     {
      "title": "General AMA Rules  ",   
      "name": "page3",
      "elements": [
       {
        "type": "boolean",
        "name": "aircraft_weighs_above_55_pounds",
        "title": "Does the aircraft weight (including fuel) above 55 pounds?",
        "isRequired": true
       },
       {
        "type": "boolean",
        "name": "certified_by_ama_large_program",
        "visibleIf": "{aircraft_weighs_above_55_pounds} = true",
        "title": "The aircraft weights above 55 pounds. Is the aircraft certified by AMA Large Aircraft Program?",
        "isRequired": true
       }
      ]
     },
     {
      "title": "General AMA Rules  (4/10)",   
     
      "name": "page4",
      "elements": [
       {
        "type": "boolean",
        "name": "max_takeoff_weight",
        "title": "Is the maximum takeoff weight greater than 55 pounds?",
        "isRequired": true,
       },
       {
        "type": "boolean",
        "name": "flown_under_ama_rules",
        "visibleIf": "{max_takeoff_weight} = true",
        "title": "The takeoff weight is above 55 pounds. Is the aircraft flown under experimental AMA rules?",
        "isRequired": true
       }
      ]
     },
     {
      "title": "General AMA Rules  (5/10)",   
     
      "name": "page5",
      "elements": [
       {
        "type": "boolean",
        "name": "flown_in_santioned_show",
        "title": "Was the aircraft flown in a sanctioned event or air show or model demonstration?",
        "isRequired": true
       },
       {
        "type": "boolean",
        "name": "manuevers_established_beforehand",
        "visibleIf": "{flown_in_santioned_show} = true",
        "title": "If so, were the manuevers involved for the event established beforehand?",
        "isRequired": true
       }
      ]
     },
     {
      "title": "General AMA Rules  (6/10)",   
     
      "name": "page6",
      "elements": [
       {
        "type": "boolean",
        "name": "has_name_address",
        "title": "Is the aircraft identified  with name and address?",
        "isRequired": true
       },
       {
        "type": "boolean",
        "name": "flown_indoors",
        "visibleIf": "{has_name_address} = true",
        "title": "Is the aircraft flown indoors?",
        "isRequired": true
       },
       {
        "type": "boolean",
        "name": "address_affixed",
        "visibleIf": "{flown_indoors} = false",
        "title": "If not, is the address affixed?",
        "isRequired": true
       }
      ]
     },
     {
      "title": "General AMA Rules  (7/10)",   
     
      "name": "page7",
      "elements": [
       {
        "type": "boolean",
        "name": "has_metal_blade_rollers",
        "title": "Does the aircraft have metal-blade rollers?",
        "isRequired": true
       }
      ]
     },
     {
      "title": "General AMA Rules  (8/10)",   
     
      "name": "page8",
      "elements": [
       {
        "type": "boolean",
        "name": "carries_pyrotechnic_devices",
        "title": "Does the aircraft carry pyrotechnic devices?",
        "isRequired": true
       },
       {
        "type": "boolean",
        "name": "devices_produce_smoke_when_burnt",
        "visibleIf": "{carries_pyrotechnic_devices} = true",
        "title": "If so, are the devices one of fuses or devices that produce smoke when burnt?",
        "isRequired": true
       },
       {
        "type": "boolean",
        "name": "devices_securely_attached",
        "visibleIf": "{devices_produce_smoke_when_burnt} = true",
        "title": "If so, are these fuses or devices that produce smoke securely attached during flight?",
        "isRequired": true
       },
       {
        "type": "boolean",
        "name": "g_series_rocker_motors",
        "visibleIf": "{carries_pyrotechnic_devices} = true",
        "title": " Does the aircraft carry G-series rocket motors?",
        "isRequired": true
       },
       {
        "type": "boolean",
        "name": "g_series_firmly_attached",
        "visibleIf": "{g_series_rocker_motors} = true",
        "title": "If so, are they firmly and securely attached?",
        "isRequired": true
       },
       {
        "type": "boolean",
        "name": "air_show_team_ama_compliant",
        "visibleIf": "{carries_pyrotechnic_devices} = true",
        "title": "Is the AIR show team officially designated according to Team AMA Program Document?",
        "isRequired": true
       }
      ]
     },
     {
      "title": "General AMA Rules  (9/10)",   
     
      "name": "page9",
      "elements": [
       {
        "type": "boolean",
        "name": "alcohol_drug_influence",
        "title": "Was the pilot under the influence of alcohol or drugs?",
        "isRequired": true
       }
      ]
     },
     {
      "title": "General AMA Rules  (10/10)",   
     
      "name": "page10",
      "elements": [
       {
        "type": "boolean",
        "name": "helmets_worn",
        "title": "Are helmets worn by the pilot?",
        "isRequired": true
       },
       {
        "type": "boolean",
        "name": "osha_approved",
        "visibleIf": "{helmets_worn} = true",
        "title": " If so, are the helmets one of OSHA/DOT/ANSI/SNELL/NOCSAE approved?",
        "isRequired": true
       },
       {
        "type": "boolean",
        "name": "helmets_under_comparable_standards",
        "visibleIf": "{osha_approved} = false",
        "title": "If not, do the helmets comply with comparable standards?",
        "isRequired": true
       }
      ]
     },
     {
      "name": "page11",
      "title": "RADIO Control Rules"
     }
    ],
    "showQuestionNumbers": "off"
   };


  