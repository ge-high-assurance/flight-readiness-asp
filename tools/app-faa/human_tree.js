english_text = {
'careless_reckless' : 'the aircraft operator was careless',
'not(careless_reckless)' : 'the aircraft operator was careful',
'max_takeoff_weight' : 'the aircraft has a maximum takeoff weight greater than  55 pounds',
'not(max_takeoff_weight)' : 'the aircraft has a maximum takeoff weight less than or equal to 55 pounds',
 'has_prior_history_of_violation' : 'the aircraft operator has prior history of violations',
 'not(has_prior_history_of_violation)' : 'the aircraft operator has no prior history of violations',
 'aircrafts_nearby' : 'there were aircrafts nearby', 
 'not(aircrafts_nearby)' : 'there were no aircrafts nearby', 
 'yield_right_of_way' : 'the aircraft yielded right of way to all nearby aircrafts',
 'not(yield_right_of_way)' : 'the aircraft failed to yield right of way to nearby aircrafts',
 'used_spotted' : 'the operator used a spotter',
 'not(used_spotted)' : 'the operator did not use a spotter',
 'flew_above_400_ft' : 'the aircraft flew above 400 feet',
 'not(flew_above_400_ft)' : 'the aircraft never flew above 400 feet',
 'within_3_miles' : 'the aircraft was within 3 miles of the airport',
 'not(within_3_miles)' : 'the aircraft was farther than 3 miles of the airport',
 'notify_authority' : 'the operator did notify authorities',
 'not(notify_authority)' : 'the operator had not notified authorities',
 'expert_assistance' : 'the operator had expert assistance',
 'not(expert_assistance)' : 'the operator did not have expert assitance',
'flown_under_ama_rules' : 'the aircraft was flown according to AMA rules',
'not(flown_under_ama_rules)' : 'the aircraft was not flown according to AMA rules',
'flown_in_sanctioned_show' : 'the aircraft was flown in a sanctioned show',
'not(flown_in_sanctioned_show)' : 'the aricraft was not flown in a sanctiooned show',
'maneuvers_established_beforehand' : 'all aircraft manuevers were established beforehand',
'not(manuevers_established_beforehand' : 'aircraft manuevers were not establishe beforehand',
'has_name_address' : 'the aircraft operator has provided a name and address',
'not(has_name_address)' : 'the aircraft does not have an operator name or address',
'flown_indoors' : 'the aircraft was flown only indoors',
'not(flown_indoors)' : 'the aircraft was flown outdoors',
'address_affixed' : 'the aircraft has the address affixed',
'not(address_affixed)' : 'the aircraft has no address affixed',
'has_metal_blade_rollers' : 'the aircraft has metal blade rollers',
'not(has_metal_blade_rollers)' : 'the aircraft does not have metal blade rollers',
'carries_pyrotechnic_devices' : 'the aircraft carries pyrotechnic devices',
'not(carries_pyrotechnic_devices)' : 'the aircraft does not carries any pyrotechnic device',
'devices_produce_smoke_when_burnt' : 'the pyrotechnique devices produce smoke when burnt',
'not(devices_produce_smoke_when_burnt)' : 'the pyrotechnique devices do not produce smoke when burnt',
'devices_securely_attached' : 'the devices were securely attached',
'not(devices_securely_attached)' : 'the devices were not securely attached',
'g_series_rocket_motors' : 'the pyrotechinque devices are G Series Rocket Motors',
'not(g_series_rocket_motors)' : 'the pyrotechnique devices are not of G Series class',
'g_series_firmly_attached' : 'the G Series motors are firmly attached',
'not(g_series_fimrly_attached)' : 'the G Series motors are not firmly attached',
'air_show_team_ama_compliant' : 'the aircraft team are an officially designated AMA Airshow team',
'not(air_show_team_ama_compliant)' : 'the aircraft team are not an official designated AMA Airshow team',
'alcohol_drug_influence' : 'the operator was under the influence of alcohol or drugs',
'not(alcohol_druc_influence)' : 'the operator was not under the influence of alcohol or drugs',
'helmets_worn' : 'the operator wore a helmet',
'not(helmets_worn)' : 'the operator did not wear a helmet',
'osha_approved' : 'the helmets worn are OSHA/DOT/ANSI/SNELL/NOCSAE approved',
'not(osha_approved)' : 'the helmets worn are not OSHA/DOT/ANSI/SNELL/NOCSAE approved',
'helmets_under_comparable_standards' : 'the helmets are compliant with comparable standards',
'not(helmets_under_comparable_standards)' : 'the helmets are not compliant with comparable standards'
 };

english_text['violation'] = 'there is a violation';
english_text['violation_1'] = 'Rule 1 is violated';
english_text['violation_2'] = 'Rule 2 is violated';
english_text['violation_3'] = 'Rule 3 is violated';
english_text['violation_4'] = 'Rule 4 is violated';
english_text['violation_5'] = 'Rule 5 is violated';
english_text['violation_6'] = 'Rule 6 is violated';
english_text['violation_7'] = 'Rule 7 is violated';
english_text['violation_8'] = 'Rule 8 is violated';
english_text['violation_9'] = 'Rule 9 is violated';
english_text['violation_10'] = 'Rule 10 is violated';






human_tree = function(encoded_html){
    var sanitized = encoded_html.replace(/\\n/g, "\n").replace(/\\"/g, '"')
    var devoded =  $("<div/>").html(sanitized).text();

}