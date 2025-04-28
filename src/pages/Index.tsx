
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4 text-primary">Связь группы крови и заболеваний</h1>
            <p className="text-xl text-muted-foreground">
              Узнайте о взаимосвязи между вашей группой крови и предрасположенностью к различным заболеваниям
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>Группы крови</CardTitle>
                <CardDescription>Информация о группах крови и их особенностях</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">Узнайте о четырех основных группах крови (0, A, B, AB), их распространенности и особенностях.</p>
                <Link to="/blood-groups" className="text-primary hover:underline">
                  Подробнее о группах крови →
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>Заболевания</CardTitle>
                <CardDescription>Предрасположенность к заболеваниям по группам крови</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">Исследуйте, как ваша группа крови может влиять на риск развития различных заболеваний.</p>
                <Link to="/diseases" className="text-primary hover:underline">
                  Изучить заболевания →
                </Link>
              </CardContent>
            </Card>
          </div>

          <div className="bg-muted p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-4 text-primary">Почему группа крови имеет значение?</h2>
            <p className="mb-3">
              Исследования показывают, что группа крови может влиять на риск развития определенных заболеваний. Это связано с тем, что 
              антигены групп крови присутствуют не только в крови, но и в других тканях организма.
            </p>
            <p>
              Понимание связи между группой крови и заболеваниями может помочь в профилактике и раннем выявлении потенциальных проблем со здоровьем.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
