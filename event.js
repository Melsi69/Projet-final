var settings = {
    Color: 'red',
    LinkColor: '',
    NavShow: true,
    NavVertical: false,
    NavLocation: '',
    DateTimeShow: true,
    DateTimeFormat: 'mmm, yyyy',
    DatetimeLocation: '',
    EventClick: '',
    EventTargetWholeDay: false,
    DisabledDays: [],
    ModelChange: model
};

var element = document.getElementById('caleandar');
caleandar(element, events, settings);

var events = [
    {'Date': new Date(2019, 6, 7), 'Title': 'DAB'},
    {'Date': new Date(2020, 3, 18), 'Title': 'oui', 'Link': 'https://garfield.com'},
    {'Date': new Date(2020, 6, 27), 'Title': '25 year anniversary', 'Link': 'https://www.google.com.au/#q=anniversary+gifts'},
];