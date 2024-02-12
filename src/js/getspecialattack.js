export default function getSpecialAttack(obj) {
  const { special } = obj;
  let res = [];

  special.forEach((item) => {
    let description = '';
	if (item.description) {
      description = item.description;
    } else {
      description = "Описание недоступно";
    }

    res.push({
      id: item.id,
      name: item.name,
      icon: item.icon,
      description: description,
    });
  });

  return res;
}
