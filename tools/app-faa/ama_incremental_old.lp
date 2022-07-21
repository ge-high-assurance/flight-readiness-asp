:- use_module(library(scasp)).

violation_1 :-  careless_reckless. 
careless_reckless :- has_prior_history_of_violation.  
violation_2 :- aircrafts_nearby, not yield_right_of_way . 
violation_2 :- aircrafts_nearby, yield_right_of_way, not used_spotter .  
violation_3 :- flew_above_400_ft, within_3_miles, not notify_authority.
violation_7 :- aircraft_weighs_above_55_pounds, not certified_by_ama_large_program.
violation_4 :- max_takeoff_weight, not flown_under_ama_rules.
violation_5 :- flown_in_sanctioned_show, not manuevers_established_beforehand.
violation_6 :- not has_name_address, not flown_indoors.
violation_6 :- not address_affixed, not flown_indoors.
%violation_7 :- has_metal_blade_rollers.
violation_8 :- carries_pyrotechnic_devices, devices_produce_smoke_when_burnt, not devices_securely_attached.
violation_8 :- carries_pyrotechnic_devices, devices_produce_smoke_when_burnt, devices_securely_attached, not g_series_rocket_motors.
violation_8 :- carries_pyrotechnic_devices, devices_produce_smoke_when_burnt, devices_securely_attached, g_series_rocket_motors, not g_series_firmly_attached.
violation_8 :- carries_pyrotechnic_devices, devices_produce_smoke_when_burnt, devices_securely_attached, g_series_rocket_motors, g_series_firmly_attached, not air_show_team_ama_compliant.
violation_9 :- alcohol_drug_influence.
violation_10 :- not helmets_worn.
violation_10 :- helmets_worn, not osha_approved, not helmets_under_comparable_standards.


violation :- violation_1.  
violation :- violation_2.
violation :- violation_3.
violation :- violation_4.
violation :- violation_5.
violation :- violation_6.
violation :- violation_7.
violation :- violation_8.
violation :- violation_9.
violation :- violation_10.