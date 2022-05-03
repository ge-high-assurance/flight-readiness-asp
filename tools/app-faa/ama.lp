% General rules
:- use_module(library(scasp)).
% Rule 1 (3 subclauses)
%  I will not willfully fly my model aircraft in a careless or reckless manner, 
%  and will abide by this Safety Code and any additional rules specific to flying sites.
#pred violation :: 'there is a violation'.
#pred careless_reckless :: 'there is evidence of the pilot being careless or reckless, from rule 1 subclause 1'.

:- discontiguous violation/0. 
violation_1 :- 
	careless_reckless.

careless_reckless :-
           has_prior_history_of_violation.

has_prior_history_of_violation.

violation :- violation_1.

violation :- 
      not_abide_safety.

violation :-
    not_follow_additional_rules.

% Rule 2 : Dynamic in nature
% TODO: need to add more detail
% I will yield the right-of-way to man-carrying aircraft and will see and avoid all aircraft, 
% utilizing a spotter when appropriate. (See AMA Document #540-D on See and Avoid Guidance.)



% Rule 3  : Dynamic in nature
% TODO: need to add more detail
%  I will not fly my model aircraft higher than approximately 400 feet above ground level, 
% when within three (3) miles of an airport without notifying the airport operator.


% Rule 4 
% The maximum takeoff weight of a model aircraft, including fuel, is 55 pounds, 
% except for those flown under the AMA Experimental Aircraft Rules.
violation :- 
  	weight_aircraft(Weight), 
	Weight > 55, 
	not applying_experimental_ama_rules.  % we can extend the definition of what experimental AMA rules mean

% Rule 5 (can be concretized more)
% I will not fly my model aircraft in sanctioned events, air shows, or model demonstrations unless I have previously proven that my aircraft, control system, and piloting skills are adequate by successfully executing all maneuvers intended or anticipated in the specific event.
% If I am not a proficient pilot, I will not fly in these events unless assisted by an experienced pilot.
violation :-
      flown_in_sanctioned_events.

violation :-
      not skills_adequate.

violation :-
      not proficient_pilot, not expert_assisted.

% Rule 6
% I will not fly my model aircraft unless it is identified with my name and address, or AMA number, 
% inside or affixed to the outside of the model aircraft. This does not apply to model aircraft flown indoors.

violation :-
     aircraft_name_mismatch,
	 not flown_indoors.
	 
violation :-
     aircraft_address_mismatch,
	 not flown_indoors.

% Rule 7
% I will not operate model aircraft with metal-blade propellers.
violation :-
    aircraft_with_metal_blade_propellers.

% Rule 8
%  I will not operate model aircraft carrying pyrotechnic devices which explode or burn, or any device, 
%  which propels a projectile of any kind. Exceptions include Free Flight fuses or devices that burn 
%  producing smoke and are securely attached to the model aircraft during flight. 
%  Rocket motors up to a G-series size may be used, provided they remain firmly attached to the model aircraft during flight.
%  Model rockets may be flown in accordance with the National Model Rocketry Safety Code; however, 
%  they may not be launched from model aircraft. 
%  Officially designated AMA Air Show Teams (AST) are authorized to use devices and practices as defined
%  within the Team AMA Program Document.

violation :-
    aircraft_has_pyrotechnics,
	not aircraft_has_only_exempted_devices.

violation :-
	not operated_by_officially_designated_ama_airshow_team.
	
violation :-
    aircraft_emits_projectiles,
	not aircraft_has_only_exempted_devices.

% exempted devices (that could potentially be projectiles or burn) as listed in the list of exceptions for rule 8
exempted_device(free_flight_fuse).
exempted_device(flammable_device) :- securely_attached(flammable_device).
exempted_device(g_series_rocket_motor) :- securely_attached(g_series_rocket_motor).
exempted_device(model_rocket) :- compliant_with_national_model_rocketry_safety_code(model_rocket).

aircraft_has_unexempted_device :- aircraft_has_device(D), not exempted_device(D).
aircraft_has_only_exempted_devices :- not aircraft_has_unexempted_device.



% Rule 9
% I will not operate my model aircraft while under the influence of alcohol or 
% while using any drug which could adversely affect my ability to safely control the model.

violation :-
    operated_under_alcohol_influence.

violation :-
    operated_under_influence_of_drugs.
	
	
% Rule 10
% When and where required by rule, helmets must be properly worn and fastened. 
% They must be OSHA, DOT, ANSI, SNELL or NOCSAE approved or comply with comparable standards.

violation :- 
   helmet_not_osha, 
   helmet_not_dot, 
   helmet_not_ansi, 
   helmet_not_snell, 
   helmet_not_nocsae,
   helmet_not_comparable_standard.
   
% Finally, the aircraft is compliant if there is no evidence supporting a violation
compliant :- not violation.	 


violation(1, jan_2020).

operated_by_officially_designated_ama_airshow_team.


