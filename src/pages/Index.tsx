import { useEffect, useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const CounterAnimation = ({ end, duration = 2000 }: { end: number; duration?: number }) => {
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

  return <span>{count.toLocaleString('ru-RU')}</span>;
};

const Index = () => {
  const scrollToResults = () => {
    document.getElementById('results')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center max-w-7xl">
          <div className="text-lg font-semibold">
            <span className="text-foreground">Glaza.Help</span>
            <span className="text-muted-foreground ml-2">/ Case</span>
          </div>
          <Button 
            variant="outline" 
            className="bg-foreground text-background hover:bg-foreground/90 border-0 font-semibold px-6"
            onClick={scrollToResults}
          >
            Результаты
          </Button>
        </div>
      </header>

      <div className="pt-20">
        <section id="hero" className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-[20%] left-[10%] w-32 h-32 border border-primary/20 rounded-full" />
            <div className="absolute top-[30%] left-[15%] w-3 h-3 bg-primary rounded-full" />
            <div className="absolute bottom-[25%] right-[12%] w-40 h-40 border border-primary/20 rounded-full" />
            <div className="absolute bottom-[30%] right-[18%] w-3 h-3 bg-primary rounded-full" />
          </div>
          
          <div className="max-w-5xl mx-auto text-center relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 mb-8">
              <Icon name="MapPin" size={16} className="text-primary" />
              <span className="text-sm text-primary uppercase tracking-wider font-medium">GEO-SCALING CASE</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-black mb-6 leading-tight">
              Кейс Glaza.Help
            </h1>
            <p className="text-4xl md:text-5xl font-light text-muted-foreground mb-4">
              4300+ leads / month
            </p>
            
            <p className="text-xl md:text-2xl text-foreground/80 mb-6 font-light">
              Как масштабировать клинику с 100 до 4300+ заявок в месяц
            </p>
            
            <p className="text-lg text-primary mb-12 font-medium">
              Роль: Операционный маркетинг / SEO / Geo-Scaling
            </p>
            
            <Button 
              size="lg"
              variant="outline"
              onClick={scrollToResults}
              className="bg-foreground text-background hover:bg-foreground/90 text-base px-8 py-6 rounded-full border-0 font-semibold"
            >
              Посмотреть цифры <Icon name="ArrowDown" className="ml-2" size={20} />
            </Button>
          </div>
        </section>

        <section className="py-24 px-6">
          <div className="max-w-5xl mx-auto">
            <Card className="p-10 md:p-14 bg-card border-border">
              <h2 className="text-4xl md:text-5xl font-bold mb-8">Задача: Захват регионов</h2>
              <div className="space-y-5 text-lg text-foreground/80 leading-relaxed">
                <p>
                  <span className="font-semibold text-foreground">Клиника лазерной коррекции зрения.</span> Ниша с перегретым аукционом в Директе и высокой конкуренцией.
                </p>
                <p>
                  <span className="font-semibold text-foreground">Стратегия:</span> Не бодаться ставками в лоб, а забрать весь органический трафик в регионах через SEO-сетку.
                </p>
                <p>
                  <span className="font-semibold text-foreground">Масштаб:</span> 1200+ посадочных страниц под каждый город и интент.
                </p>
              </div>
            </Card>
          </div>
        </section>

        <section className="py-24 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Я не был стратегом. Я был «двигателем».
              </h2>
              <div className="border-l-4 border-primary pl-6">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Стратегию придумал Head of Marketing. Моя задача была — реализовать её руками, системно, без ошибок и в промышленных масштабах.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: 'Layers',
                  title: 'Конвейер гео-страниц',
                  description: 'Создал и упаковал 1200+ страниц вида «Лазерная коррекция в [Самаре]». Структура, лид-магниты, формы записи, социальные доказательства. Каждая страница — как отдельный лендинг.'
                },
                {
                  icon: 'Globe',
                  title: 'Адаптация и «Оживление»',
                  description: 'Чтобы Яндекс не склеил сетку за дубли, я адаптировал контент: местные топонимы, районы, специфика лексики. Делал так, чтобы житель Урюпинска верил, что клиника "своя", а не московская заглушка.',
                  highlight: true
                },
                {
                  icon: 'Zap',
                  title: 'Техническое SEO',
                  description: 'Внутренняя перелинковка (Stat weight flow), работа с H1-H3, мета-тегами под семантику. Плотная работа с разработкой по микроразметке и скорости загрузки.'
                }
              ].map((card, idx) => (
                <Card 
                  key={idx}
                  className={`p-8 transition-all duration-300 ${
                    card.highlight 
                      ? 'bg-card border-2 border-primary' 
                      : 'bg-card border border-border hover:border-border/60'
                  }`}
                >
                  <div className={`mb-6 w-14 h-14 rounded-2xl flex items-center justify-center ${
                    card.highlight ? 'bg-primary' : 'bg-secondary'
                  }`}>
                    <Icon 
                      name={card.icon} 
                      size={28} 
                      className={card.highlight ? 'text-background' : 'text-foreground'}
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-4">{card.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">{card.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="results" className="py-24 px-6 bg-secondary/30">
          <div className="max-w-6xl mx-auto">
            <div className="mb-16">
              <h2 className="text-5xl md:text-6xl font-black mb-4">
                Результаты команды <span className="text-muted-foreground font-light">за 4 года</span>
              </h2>
              <p className="text-muted-foreground text-lg italic">
                * Я подключился на этапе масштабирования (последний год), обеспечивая рост базы.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <Card className="p-10 bg-card border-2 border-primary relative overflow-hidden">
                <div className="absolute top-4 right-4 bg-primary text-background text-xs font-bold px-3 py-1 rounded-full">
                  x43
                </div>
                <div className="text-7xl font-black mb-4 text-primary font-mono">
                  4 <CounterAnimation end={300} />+/мес
                </div>
                <div className="text-xl font-bold mb-2">Рост заявок</div>
                <div className="text-sm text-muted-foreground">с 100 до 4300+</div>
              </Card>

              <Card className="p-10 bg-card border border-border">
                <div className="text-7xl font-black mb-4 text-foreground font-mono">
                  ₽<CounterAnimation end={350} />
                </div>
                <div className="text-xl font-bold mb-2">CPA</div>
                <div className="text-sm text-muted-foreground mb-3">снижение с 900 ₽</div>
                <div className="text-xs text-muted-foreground italic">В нише медицины — это космос</div>
              </Card>

              <Card className="p-10 bg-card border border-border">
                <div className="text-7xl font-black mb-4 text-foreground font-mono">
                  <CounterAnimation end={52} /> 000+
                </div>
                <div className="text-xl font-bold mb-2">Органика</div>
                <div className="text-sm text-muted-foreground mb-3">трафик в месяц</div>
                <div className="text-xs text-muted-foreground">было 800</div>
              </Card>
            </div>

            <Card className="p-10 bg-card border border-border">
              <div className="flex justify-between items-start mb-8">
                <div>
                  <h3 className="text-3xl font-bold mb-2">Динамика заявок</h3>
                  <p className="text-muted-foreground text-sm">Органический рост без увеличения рекламного бюджета</p>
                </div>
                <div className="text-right">
                  <div className="text-4xl font-black text-primary">65%</div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider">ЗАЯВОК ИЗ SEO</div>
                </div>
              </div>
              
              <div className="relative h-64 border-l border-b border-border/40">
                <svg className="w-full h-full" viewBox="0 0 1000 250" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.2" />
                      <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.6" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M 0 240 Q 250 220, 500 180 T 1000 20 L 1000 250 L 0 250 Z"
                    fill="url(#gradient)"
                  />
                  <path
                    d="M 0 240 Q 250 220, 500 180 T 1000 20"
                    stroke="hsl(var(--primary))"
                    strokeWidth="3"
                    fill="none"
                  />
                  <circle cx="1000" cy="20" r="6" fill="hsl(var(--primary))" />
                </svg>
                
                <div className="absolute bottom-0 left-0 right-0 flex justify-between text-xs text-muted-foreground px-2 pb-1">
                  <span>Start</span>
                  <span>Year 1</span>
                  <span>Year 2</span>
                  <span>Year 3</span>
                  <span>Year 4</span>
                </div>
                
                <div className="absolute right-4 top-4 bg-card border border-primary px-4 py-2 rounded-lg">
                  <div className="text-xs text-muted-foreground">Year 4</div>
                  <div className="text-lg font-bold text-primary">value : 4300</div>
                </div>
              </div>
            </Card>
          </div>
        </section>

        <section className="py-24 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary mb-8">
                <Icon name="ArrowUp" size={16} className="text-primary" />
                <span className="text-sm text-primary uppercase tracking-wider font-medium">SYSTEM UPGRADE AVAILABLE</span>
              </div>
              
              <h2 className="text-5xl md:text-6xl font-black mb-8">
                ПОЧЕМУ СЕЙЧАС<br />Я ИДУ ВЫШЕ?
              </h2>
              
              <p className="text-lg text-muted-foreground max-w-2xl mb-8">
                Этот проект стал моим «боевым крещением». Я набил руку, увидел изнанку масштабного бизнеса и <span className="text-foreground font-semibold">перерос роль линейного исполнителя</span>.
              </p>
              
              <div className="border-l-4 border-primary pl-6 py-2 bg-card/30">
                <p className="text-foreground/90 italic">
                  "Я набил руку, увидел изнанку масштабного бизнеса и перерос роль линейного исполнителя."
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: 'Target',
                  title: 'Меня нельзя обмануть подрядчикам',
                  content: 'Я своими руками делал SEO, контент и верстку. Если подрядчик скажет: «На эту задачу нужно 2 недели», я точно знаю, что её можно сделать за 2 дня.'
                },
                {
                  icon: 'GitBranch',
                  title: 'Я умею декомпозировать стратегию',
                  content: 'Я видел, как «Большая Идея» распадается на тысячи мелких задач. Я умею превращать абстрактную стратегию в понятные, пошаговые ТЗ для команды.'
                },
                {
                  icon: 'Lightbulb',
                  title: 'Мои решения опираются на реальность',
                  content: 'Я не витаю в облаках и не предлагаю оторванные от жизни идеи. Любая моя гипотеза всегда приземлена на возможности реализации, потому что я знаю цену ручного труда.'
                }
              ].map((item, idx) => (
                <Card key={idx} className="p-8 bg-card border border-border hover:border-primary/50 transition-all duration-300 group">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                      <Icon name={item.icon} size={20} className="text-primary" />
                    </div>
                    <Icon name="ArrowRight" size={20} className="text-muted-foreground/40 mt-2" />
                  </div>
                  <h3 className="text-lg font-bold mb-3 leading-tight">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.content}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 px-6 bg-secondary/30">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black mb-12">
              Чему меня научил этот проект
            </h2>
            <p className="text-lg text-muted-foreground mb-16">
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
              ].map((item) => (
                <Card key={item.number} className="p-8 bg-card border-l-4 border-l-primary hover:bg-card/80 transition-all duration-300">
                  <div className="flex gap-6 items-start">
                    <div className="text-5xl font-black text-primary/20 font-mono">{item.number}</div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{item.content}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <footer className="py-12 px-6 border-t border-border">
          <div className="max-w-6xl mx-auto text-center">
            <p className="text-muted-foreground">
              Готов приносить такие же результаты в вашей команде
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
