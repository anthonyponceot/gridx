define([
	'./_cases'
], function(cases){

	cases.push(
		{
			title: 'fixed column width',
			cache: "gridx/core/model/cache/Sync",
			store: 'memory',
			size: 100,
			structure: [
				{id: 'id', field: 'id', name: 'Identity', width: '50px'},
				{id: 'Genre', field: 'Genre', name: 'Genre', width: '100px'},
				{id: 'Artist', field: 'Artist', name: 'Artist', width: '100px'},
				{id: 'Year', field: 'Year', name: 'Year', width: '80px'},
				{id: 'Album', field: 'Album', name: 'Album', width: '150px'},
				{id: 'Name', field: 'Name', name: 'Name', width: '160px'},
				{id: 'Length', field: 'Length', name: 'Length', width: '80px'},
				{id: 'Track', field: 'Track', name: 'Track', width: '50px'},
				{id: 'Composer', field: 'Composer', name: 'Composer', width: '200px'},
				{id: 'Download Date', field: 'Download Date', name: 'Download Date', width: '200px'},
				{id: 'Last Played', field: 'Last Played', name: 'Last Played', width: '200px'},
				{id: 'Heard', field: 'Heard', name: 'Heard', width: '80px'}
			]
		},
		{
			title: 'some fixed, others auto',
			cache: "gridx/core/model/cache/Sync",
			store: 'memory',
			size: 100,
			structure: [
				{id: 'id', field: 'id', name: 'Identity', width: '50px'},
				{id: 'Genre', field: 'Genre', name: 'Genre (auto)'},
				{id: 'Artist', field: 'Artist', name: 'Artist (auto)'},
				{id: 'Year', field: 'Year', name: 'Year', width: '50px'},
				{id: 'Album', field: 'Album', name: 'Album (auto)', width: 'auto'},
				{id: 'Name', field: 'Name', name: 'Name (auto)', width: 'auto'},
				{id: 'Length', field: 'Length', name: 'Length', width: '50px'},
				{id: 'Track', field: 'Track', name: 'Track', width: '40px'}
			]
		},
		{
			title: 'too many fixed, others auto',
			cache: "gridx/core/model/cache/Sync",
			store: 'memory',
			size: 100,
			structure: [
				{id: 'id', field: 'id', name: 'Identity', width: '120px'},
				{id: 'Genre', field: 'Genre', name: 'Genre', width: '180px'},
				{id: 'Artist', field: 'Artist', name: 'Artist', width: '220px'},
				{id: 'Year', field: 'Year', name: 'Year', width: '100px'},
				{id: 'Album', field: 'Album', name: 'Album', width: '260px'},
				{id: 'Name', field: 'Name', name: 'Name (auto)'},
				{id: 'Length', field: 'Length', name: 'Length (auto)'},
				{id: 'Track', field: 'Track', name: 'Track (auto)'},
				{id: 'Composer', field: 'Composer', name: 'Composer (auto)'},
				{id: 'Download Date', field: 'Download Date', name: 'Download Date (auto)'},
				{id: 'Last Played', field: 'Last Played', name: 'Last Played (auto)'},
				{id: 'Heard', field: 'Heard', name: 'Heard (auto)'}
			]
		},
		{
			title: 'auto and percentage width',
			cache: "gridx/core/model/cache/Sync",
			store: 'memory',
			size: 100,
			structure: [
				{id: 'id', field: 'id', name: 'Identity (auto)'},
				{id: 'Year', field: 'Year', name: 'Year (auto)'},
				{id: 'Genre', field: 'Genre', name: 'Genre (30%)', width: '30%'},
				{id: 'Artist', field: 'Artist', name: 'Artist (20%)', width: '20%'},
				{id: 'Name', field: 'Name', name: 'Name (30%)', width: '30%'}
			]
		},
		{
			title: 'too much percentage',
			cache: "gridx/core/model/cache/Sync",
			store: 'memory',
			size: 100,
			structure: [
				{id: 'id', field: 'id', name: 'Identity', width: '50px'},
				{id: 'Name', field: 'Name', name: 'Name (30%)', width: '30%'},
				{id: 'Genre', field: 'Genre', name: 'Genre (20%)', width: '20%'},
				{id: 'Year', field: 'Year', name: 'Year (auto)'},
				{id: 'Length', field: 'Length', name: 'Length (auto)'},
				{id: 'Track', field: 'Track', name: 'Track (auto)'},
				{id: 'Artist', field: 'Artist', name: 'Artist (30%)', width: '30%'},
				{id: 'Album', field: 'Album', name: 'Album (40%)', width: '40%'},
				{id: 'Composer', field: 'Composer', name: 'Composer (30%)', width: '30%'}
			]
		},
		{
			title: 'px em percentage auto',
			cache: "gridx/core/model/cache/Sync",
			store: 'memory',
			size: 100,
			structure: [
				{id: 'id', field: 'id', name: 'Identity (40px)', width: '40px'},
				{id: 'Genre', field: 'Genre', name: 'Genre (10em)', width: '10em'},
				{id: 'Artist', field: 'Artist', name: 'Artist (15%)', width: '15%'},
				{id: 'Year', field: 'Year', name: 'Year (auto)'},
				{id: 'Album', field: 'Album', name: 'Album (180px)', width: '180px'},
				{id: 'Name', field: 'Name', name: 'Name (8em)', width: '8em'},
				{id: 'Length', field: 'Length', name: 'Length (5%)', width: '5%'},
				{id: 'Track', field: 'Track', name: 'Track (auto)'},
				{id: 'Composer', field: 'Composer', name: 'Composer (auto)'}
			]
		},
		{
			title: 'auto and minWidth',
			cache: "gridx/core/model/cache/Sync",
			store: 'memory',
			size: 100,
			structure: [
				{id: 'id', field: 'id', name: 'Identity'},
				{id: 'Genre', field: 'Genre', name: 'Genre'},
				{id: 'Artist', field: 'Artist', name: 'Artist', minWidth: 200},
				{id: 'Year', field: 'Year', name: 'Year'},
				{id: 'Album', field: 'Album', name: 'Album', minWidth: 200},
				{id: 'Name', field: 'Name', name: 'Name'},
				{id: 'Length', field: 'Length', name: 'Length'},
				{id: 'Track', field: 'Track', name: 'Track'},
				{id: 'Composer', field: 'Composer', name: 'Composer'}
			]
		},
		{
			title: 'percentage and minWidth',
			cache: "gridx/core/model/cache/Sync",
			store: 'memory',
			size: 100,
			structure: [
				{id: 'id', field: 'id', name: 'Identity', width: '20%'},
				{id: 'Genre', field: 'Genre', name: 'Genre', width: '20%'},
				{id: 'Artist', field: 'Artist', name: 'Artist(min 300px)', width: '20%', minWidth: 300},
				{id: 'Year', field: 'Year', name: 'Year', width: '20%'},
				{id: 'Album', field: 'Album', name: 'Album(min 300px)', width: '20%', minWidth: 300}
			]
		},
		{
			title: 'fixed & percentage width, not enough columns',
			cache: "gridx/core/model/cache/Sync",
			store: 'memory',
			size: 100,
			structure: [
				{id: 'id', field: 'id', name: 'Identity', width: '50px'},
				{id: 'Genre', field: 'Genre', name: 'Genre', width: '20%'}
			]
		},
		{
			title: 'single auto column',
			cache: "gridx/core/model/cache/Sync",
			store: 'memory',
			size: 100,
			structure: [
				{id: 'id', field: 'id', name: 'Identity'}
			]
		},
		{
			title: 'single 100% width column',
			cache: "gridx/core/model/cache/Sync",
			store: 'memory',
			size: 100,
			structure: [
				{id: 'id', field: 'id', name: 'Identity', width: '100%'}
			]
		}
	);

	return cases;
});
