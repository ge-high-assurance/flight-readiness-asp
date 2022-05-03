:- module(app_faa, []).
:- use_module(library(pengines)).
:- use_module(library(scasp)).
:- use_module(library(scasp/human)).
consult('sCASP/prolog/scasp/dyncall.pl').
:- pengine_application(faa).


sandbox:safe_primitive(system:fail).
sandbox:safe_primitive(system:set_prolog_flag(_,_)).
sandbox:safe_primitive(system:print(_)).
sandbox:safe_primitive(system:nl).
sandbox:safe_primitive(system:tab(_)).
sandbox:safe_primitive(system:functor(_,_,_,_)).

system:win_folder(appdata, './').
%sandbox:safe_primitive(scasp_dyncall:scasp(_,_)).
