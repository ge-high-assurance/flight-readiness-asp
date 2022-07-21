json = {
 "title": "AMA Rule Violation Check",
 "logoPosition": "right",
 "pages": [
  {
   "name": "page1",
   "elements": [
    {
     "type": "boolean",
     "name": "has_prior_history_of_violation",
     "title": "Does the pilot have prior history of violation?",
     "isRequired": true
    }
   ],
   "title": "General AMA Rules (1/10)"
  },
  {
   "name": "page2",
   "elements": [
    {
     "type": "boolean",
     "name": "human_carrying_aircraft",
     "title": "Were there any human carrying aircrafts during flight?",
     "isRequired": true
    },
    {
     "type": "boolean",
     "name": "yield_right_of_way",
     "visibleIf": "{human_carrying_aircraft} = true",
     "title": "There, were human carrying aircrafts during flight.  Did the pilot yield the right of way?",
     "isRequired": true
    },
    {
     "type": "boolean",
     "name": "used_spotter",
     "visibleIf": "{yield_right_of_way} = true",
     "title": "The pilot yield the right of way. Did they use a spotter?",
     "isRequired": true
    }
   ],
   "title": "General AMA Rules (2/10)"
  },
  {
   "name": "page3",
   "elements": [
    {
     "type": "boolean",
     "name": "alcohol_drug_influence",
     "title": "Was the pilot under the influence of alcohol or drugs?",
     "isRequired": true
    }
   ],
   "title": "General AMA Rules (3/10)"
  },
  {
   "name": "page4",
   "elements": [
    {
     "type": "boolean",
     "name": "directly_over_people_vehicles_structures",
     "title": "Did the aircraft fly directly over people or moving vehicles or occupied structures?",
     "isRequired": true
    }
   ],
   "title": "General AMA Rules (4/10)"
  },
  {
   "name": "page5",
   "elements": [
    {
     "type": "boolean",
     "name": "ff_cl",
     "title": "Is the aircraft a Free Flight (FF) or a Control Line (CL) model",
     "isRequired": true
    },
    {
     "type": "boolean",
     "name": "ama_safety_programming",
     "visibleIf": "{ff_cl} = true",
     "title": "The aircraft is a FF/CL model. Does it comply with AMA safety programming?",
     "isRequired": true
    }
   ],
   "title": "General AMA Rules (5/10)"
  },
  {
   "name": "page6",
   "elements": [
    {
     "type": "boolean",
     "name": "visual_contact_using_enhancement",
     "title": "Does the operator use visual contact enhancement other than their prescribed eye glasses?",
     "isRequired": true
    },
    {
     "type": "boolean",
     "name": "advanced_system_or_fpv",
     "title": "Does the operator use an advanced flight system or an FPV?",
     "isRequired": true
    },
    {
     "type": "boolean",
     "name": "ama_advanced_flight_system_programming",
     "visibleIf": "{advanced_system_or_fpv} = true",
     "title": "The operator uses an advanced flight system/FPV.  Is the aircraft compliant with AMA Advanced Flight System programming?",
     "isRequired": true
    }
   ],
   "title": "General AMA Rules (6/10)"
  },
  {
   "name": "page7",
   "elements": [
    {
     "type": "boolean",
     "name": "aircraft_weighs_above_55_pounds",
     "title": "Does the aircraft weight over 55 pounds including fuel?",
     "isRequired": true
    },
    {
     "type": "boolean",
     "name": "certified_by_ama_large_program",
     "visibleIf": "{aircraft_weighs_above_55_pounds} = true",
     "title": "The aircraft weights above 55 pounds. Is it  certified through AMA large model aircraft program?",
     "isRequired": true
    }
   ],
   "title": "General AMA Rules (7/10)"
  },
  {
   "name": "page8",
   "elements": [
    {
     "type": "boolean",
     "name": "turbine_model",
     "title": "Is the aircraft a turbine engine model?",
     "isRequired": true
    },
    {
     "type": "boolean",
     "name": "ama_gas_turbine_program",
     "visibleIf": "{turbine_model} = true",
     "title": "The aircraft is a turbine model. Does it comply with AMA Gas Turbine Program?",
     "isRequired": true
    }
   ],
   "title": "General AMA Rules (8/10)"
  },
  {
   "name": "page9",
   "elements": [
    {
     "type": "boolean",
     "name": "closer_than_25_ft",
     "title": "Did the aircraft fly closer than 25ft to an individual?",
     "isRequired": true
    },
    {
     "type": "boolean",
     "name": "landing_takeoff",
     "visibleIf": "{closer_than_25_ft} = true",
     "title": "The aircraft flew closer than 25ft to an individual. Was it during landing/takeoff",
     "isRequired": true
    },
    {
     "type": "boolean",
     "name": "ama_competition_regulation",
     "visibleIf": "{landing_takeoff} = false",
     "title": "The aircraft flew closer than 25ft not during landing/takeoff. Was it operated within AMA Competition Regulations?",
     "isRequired": true
    }
   ],
   "title": "General AMA Rules (9/10)"
  },
  {
   "name": "page10",
   "elements": [
    {
     "type": "boolean",
     "name": "uses_established_safety_line",
     "title": "Does the operator use an established safety line to separate aircraft from spectators and bystanders?",
     "isRequired": true
    }
   ],
   "title": "General AMA Rules (10/10)"
  }
 ]
}