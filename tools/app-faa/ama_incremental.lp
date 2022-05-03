:- use_module(library(scasp)).
violation_1 :-  careless_reckless. 
careless_reckless :- has_prior_history_of_violation.  
violation_2 :- aircrafts_nearby, not yield_right_of_way . 
violation_2 :- aircrafts_nearby, yield_right_of_way, not used_spotter .  
violation_3 :- flew_above_400_ft, within_3_miles, not notify_authority.
violation_4 :- max_takeoff_weight(W), W > 55, not flown_under_ama_rules.

violation :- violation_1.  
violation :- violation_2.
violation :- violation_3.
violation :- violation_4.