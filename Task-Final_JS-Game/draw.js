function drawInterface(paragraphNomber) {	
	
	let mText = document.createElement('div');
	mText.innerText = paragraphs[paragraphNomber].mainText;

	let buttonsSpace = document.createElement('div');
	buttonsSpace.className = 'variantsButtons';
	
	let l = paragraphs[paragraphNomber].vars.length;

	for (let i = 0; i < l; i++) {

		let button = document.createElement('button');
		button.id = paragraphs[paragraphNomber].vars[i].nomber;
		button.innerText = paragraphs[paragraphNomber].vars[i].text;
		button.className = 'variantButton';    
		//button.onclick = function() {drawInterface(button.id)}
		
		buttonsSpace.append(button);
	}

	document.getElementsByClassName('pageMainText')[0].replaceWith(mText);
	document.getElementsByClassName('variantsButtons')[0].replaceWith(buttonsSpace);
}

const paragraphs = [];

paragraphs[1] = {
    mainText: 'Слуга выводит Арбалета из конюшни, и вы легко вскакиваете в седло. Тихий провинциальный Ажен еще спит; стук копыт гулко разносится по мостовым. У ворот приходится первый раз воспользоваться королевским перстнем: выскочившая из караулки заспанная стража не решается нарушить строгий запрет губернатора: никого из города не выпускать. Генрих принял необходимые меры предосторожности: теперь вы можете быть уверены, что даже самый ловкий шпион не смог бы выехать из Ажена раньше вас. Но вот ворота позади. Теперь предстоит решить, по какой дороге направить своего коня:',
    vars: [{
        text: 'на Вильнёв (83)',
        nomber: 83
    },
    {
        text: 'на Каор (321)',
        nomber: 321
    }]
}

paragraphs[83] = {
    mainText: 'Через пару лье справа от дороги попадается небольшой трактир. У коновязи слуга держит лошадь, с которой спрыгивает какой-то дворянин. Судя по берету, это — гасконец. Лицо его кажется странно знакомым. Увидев вас, он выходит на дорогу и знаком приглашает вас остановиться.',
    vars: [{
        text: 'Задержитесь, чтобы узнать, что ему надо (401)',
        nomber: 401
    },
    {
        text: 'крикните, что у вас нет времени, и пришпорите коня (535)',
        nomber: 535
    }]
}

paragraphs[321] = {
    mainText: 'Примерно через пять лье вы слышите на дороге за спиной приближающийся стук копыт. На горизонте показываются два всадника, несущиеся во весь опор вслед за вами. Наверно, ворота уже открыли, и теперь они торопятся наверстать упущенное время. Что это: погоня или Генрих послал вам вослед курьеров, чтобы что-то передать? А, может быть, они вообще не имеют к вашему поручению ни малейшего отношения.',
    vars: [{
        text: 'Остановитесь, чтобы подождать их (210)',
        nomber: 210
    },
    {
        text: 'постараетесь побыстрее добраться до Каора (403)',
        nomber: 403
    }]
}