import { useEffect, useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const CounterAnimation = ({ end, duration = 2000, suffix = '' }: { end: number; duration?: number; suffix?: string }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number | null = null;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  }, [end, duration]);

  return <span>{count.toLocaleString('ru-RU')}{suffix}</span>;
};

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-card">
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        
        {/* Hero Section */}
        <section className="min-h-[80vh] flex flex-col justify-center items-center text-center mb-24">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent leading-tight">
              Кейс Glaza.Help: Как масштабировать клинику с 100 до 4300+ заявок в месяц
            </h1>
            <h2 className="text-xl md:text-2xl text-muted-foreground mb-8 font-medium">
              Роль: Операционный маркетинг / SEO / Geo-Scaling
            </h2>
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-lg px-8 py-6 rounded-full shadow-2xl hover:shadow-primary/50 transition-all duration-300 hover:scale-105"
            >
              Посмотреть цифры <Icon name="ArrowDown" className="ml-2" />
            </Button>
          </div>
        </section>

        {/* Context Section */}
        <section className="mb-24 animate-fade-in">
          <Card className="p-8 md:p-12 bg-card/50 backdrop-blur border-border/50 hover:border-primary/50 transition-all duration-300">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">Задача: Захват регионов</h2>
            <div className="space-y-4 text-lg text-foreground/90">
              <p>
                <span className="font-semibold text-secondary">Клиника лазерной коррекции зрения.</span> Ниша с перегретым аукционом в Директе и высокой конкуренцией.
              </p>
              <p>
                <span className="font-semibold text-primary">Стратегия:</span> Не бодаться ставками в лоб, а забрать весь органический трафик в регионах через SEO-сетку.
              </p>
              <p>
                <span className="font-semibold text-secondary">Масштаб:</span> 1200+ посадочных страниц под каждый город и интент.
              </p>
            </div>
          </Card>
        </section>

        {/* Role Section */}
        <section className="mb-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Я не был стратегом. Я был «двигателем».</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Стратегию придумал Head of Marketing. Моя задача была — реализовать её руками, системно, без ошибок и в промышленных масштабах.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: 'Layers',
                title: 'Конвейер гео-страниц',
                description: 'Создал и упаковал 600+ страниц вида «Лазерная коррекция в [Самаре]». Структура, лид-магниты, формы записи, социальные доказательства. Каждая страница — как отдельный лендинг.'
              },
              {
                icon: 'Sparkles',
                title: 'Адаптация и "Оживление"',
                description: 'Чтобы Яндекс не склеил сетку за дубли, я адаптировал контент: местные топонимы, районы, специфика лексики. Делал так, чтобы житель Урюпинска верил, что клиника "своя", а не московская заглушка.'
              },
              {
                icon: 'Settings',
                title: 'Техническое SEO',
                description: 'Внутренняя перелинковка, работа с H1-H3, мета-тегами под семантику. Плотная работа с разработкой по микроразметке и скорости загрузки.'
              }
            ].map((card, idx) => (
              <Card 
                key={idx} 
                className="p-6 bg-card/80 backdrop-blur border-border/50 hover:border-primary/70 hover:shadow-xl hover:shadow-primary/20 transition-all duration-300 hover:-translate-y-2 group"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="mb-4 w-14 h-14 rounded-2xl bg-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Icon name={card.icon} size={28} className="text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">{card.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{card.description}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* Results Section */}
        <section className="mb-24">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black mb-4">Результаты команды (за 4 года)</h2>
            <p className="text-lg text-muted-foreground">
              Я подключился на этапе масштабирования (последний год), обеспечивая рост базы
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              { value: 43, prefix: 'x', label: 'Рост заявок', sublabel: 'с 100 до 4300+/мес' },
              { value: 350, suffix: ' ₽', label: 'CPA', sublabel: 'снижение с 900 ₽. В нише медицины — это космос.' },
              { value: 52000, suffix: '+', label: 'Органический трафик', sublabel: 'в месяц (было 800)' }
            ].map((stat, idx) => (
              <Card 
                key={idx} 
                className="p-8 text-center bg-gradient-to-br from-card to-card/50 border-2 border-primary/30 hover:border-primary hover:shadow-2xl hover:shadow-primary/30 transition-all duration-500 group"
              >
                <div className="text-6xl md:text-7xl font-black mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                  {stat.prefix}
                  <CounterAnimation end={stat.value} />
                  {stat.suffix}
                </div>
                <div className="text-xl font-bold mb-2">{stat.label}</div>
                <div className="text-sm text-muted-foreground">{stat.sublabel}</div>
              </Card>
            ))}
          </div>

          <Card className="p-8 bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/30">
            <div className="flex items-center gap-4">
              <Icon name="TrendingUp" size={40} className="text-primary" />
              <p className="text-lg font-semibold">
                65% заявок приходит из органики, которую мы построили
              </p>
            </div>
          </Card>
        </section>

        {/* Learnings Section */}
        <section className="mb-24">
          <h2 className="text-4xl md:text-5xl font-black mb-12 text-center">
            Чему меня научил этот проект
          </h2>
          <p className="text-lg text-muted-foreground mb-12 text-center max-w-4xl mx-auto">
            Я пришел в команду на 4-й год, когда стратегия уже работала. Моей задачей было не «изобретать велосипед», а крутить педали на максимальной скорости.
          </p>

          <div className="space-y-6">
            {[
              {
                number: '01',
                title: 'Идея — ничто, Реализация — всё',
                content: 'Стратегия гео-сетки была придумана до меня. Но чтобы она принесла 4300 заявок, кто-то должен был физически собрать 1200 страниц. Я понял: в маркетинге на дистанции побеждает не тот, кто креативнее, а тот, кто умеет делать монотонную работу качественно и без ошибок.'
              },
              {
                number: '02',
                title: 'Масштаб требует дисциплины',
                content: 'Когда у тебя 1200 поддоменов, ты не можешь работать «по настроению». Любая мелкая ошибка в шаблоне умножается на 1200. Этот проект научил меня системности. Я умею работать по ТЗ, следить за дедлайнами и проверять себя.'
              },
              {
                number: '03',
                title: 'Понимание «Зачем»',
                content: 'Хоть я был исполнителем, я видел общую картину: CPA, ROI, Трафик. Я делал свою часть работы (контент/SEO/верстка) не для галочки, а понимая, как каждая конкретная страница влияет на общую воронку продаж.'
              }
            ].map((item, idx) => (
              <Card 
                key={idx} 
                className="p-8 bg-card/60 backdrop-blur border-l-4 border-l-primary hover:border-l-secondary hover:shadow-xl transition-all duration-300"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="flex gap-6 items-start">
                  <div className="text-6xl font-black text-primary/20">{item.number}</div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-3 text-primary">{item.title}</h3>
                    <p className="text-lg text-foreground/90 leading-relaxed">{item.content}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Why Now Section */}
        <section className="mb-24">
          <Card className="p-12 bg-gradient-to-br from-primary/20 via-card to-secondary/20 border-2 border-primary/40">
            <h2 className="text-4xl md:text-5xl font-black mb-8 text-center">
              ПОЧЕМУ СЕЙЧАС Я ИДУ ВЫШЕ?
            </h2>
            <p className="text-lg text-center mb-12 max-w-3xl mx-auto text-foreground/90">
              Этот проект стал моим «боевым крещением». Я набил руку, увидел изнанку масштабного бизнеса и перерос роль линейного исполнителя.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: 'Shield',
                  title: 'Меня нельзя обмануть подрядчикам',
                  content: 'Я своими руками делал SEO, контент и верстку. Если подрядчик скажет: «На эту задачу нужно 2 недели», я точно знаю, что её можно сделать за 2 дня.'
                },
                {
                  icon: 'Target',
                  title: 'Я умею декомпозировать стратегию',
                  content: 'Я видел, как «Большая Идея» распадается на тысячи мелких задач. Я умею превращать абстрактную стратегию в понятные, пошаговые ТЗ для команды.'
                },
                {
                  icon: 'Lightbulb',
                  title: 'Мои решения опираются на реальность',
                  content: 'Я не витаю в облаках и не предлагаю оторванные от жизни идеи. Любая моя гипотеза всегда приземлена на возможности реализации, потому что я знаю цену ручного труда.'
                }
              ].map((item, idx) => (
                <div key={idx} className="text-center group">
                  <div className="mb-4 mx-auto w-16 h-16 rounded-2xl bg-primary flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    <Icon name={item.icon} size={32} className="text-background" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.content}</p>
                </div>
              ))}
            </div>
          </Card>
        </section>

        {/* Footer CTA */}
        <section className="text-center py-12">
          <div className="inline-block px-8 py-4 bg-gradient-to-r from-primary to-secondary rounded-full">
            <p className="text-xl font-bold text-background">
              Готов приносить такие же результаты в вашей команде 🚀
            </p>
          </div>
        </section>

      </div>
    </div>
  );
};

export default Index;
