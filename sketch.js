const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

function setup(){
    var canvas = createCanvas(400,400);

    engine = Engine.create();
    world = engine.world;

    a = new Raindrop(random(0,200),random(0,400),random(15,30));
    b = new Raindrop(random(0,200),random(0,400),random(15,30));
    c = new Raindrop(random(0,200),random(0,400),random(15,30));
    d = new Raindrop(random(0,200),random(0,400),random(15,30));
    e = new Raindrop(random(0,200),random(0,400),random(15,30));
    f = new Raindrop(random(0,200),random(0,400),random(15,30));
    g = new Raindrop(random(0,200),random(0,400),random(15,30));
    h = new Raindrop(random(0,200),random(0,400),random(15,30));
    i = new Raindrop(random(0,200),random(0,400),random(15,30));
    j = new Raindrop(random(0,200),random(0,400),random(15,30));
    k = new Raindrop(random(0,200),random(0,400),random(15,30));
    l = new Raindrop(random(0,200),random(0,400),random(15,30));
    m = new Raindrop(random(0,200),random(0,400),random(15,30));
    n = new Raindrop(random(0,200),random(0,400),random(15,30));
    o = new Raindrop(random(0,200),random(0,400),random(15,30));
    p = new Raindrop(random(0,200),random(0,400),random(15,30));
    q = new Raindrop(random(0,200),random(0,400),random(15,30));
    r = new Raindrop(random(0,200),random(0,400),random(15,30));
    s = new Raindrop(random(0,200),random(0,400),random(15,30));
    t = new Raindrop(random(0,200),random(0,400),random(15,30));
    a1 = new Raindrop(random(200,400),random(0,400),random(15,30));
    b1 = new Raindrop(random(200,400),random(0,400),random(15,30));
    c1 = new Raindrop(random(200,400),random(0,400),random(15,30));
    d1 = new Raindrop(random(200,400),random(0,400),random(15,30));
    e1 = new Raindrop(random(200,400),random(0,400),random(15,30));
    f1 = new Raindrop(random(200,400),random(0,400),random(15,30));
    g1 = new Raindrop(random(200,400),random(0,400),random(15,30));
    h1 = new Raindrop(random(200,400),random(0,400),random(15,30));
    i1 = new Raindrop(random(200,400),random(0,400),random(15,30));
    j1 = new Raindrop(random(200,400),random(0,400),random(15,30));
    k1 = new Raindrop(random(200,400),random(0,400),random(15,30));
    l1 = new Raindrop(random(200,400),random(0,400),random(15,30));
    m1 = new Raindrop(random(200,400),random(0,400),random(15,30));
    n1 = new Raindrop(random(200,400),random(0,400),random(15,30));
    o1 = new Raindrop(random(200,400),random(0,400),random(15,30));
    p1 = new Raindrop(random(200,400),random(0,400),random(15,30));
    q1 = new Raindrop(random(200,400),random(0,400),random(15,30));
    r1 = new Raindrop(random(200,400),random(0,400),random(15,30));
    s1 = new Raindrop(random(200,400),random(0,400),random(15,30));
    t1 = new Raindrop(random(200,400),random(0,400),random(15,30));
    


    ground = new Ground(200,390,400,20);
}

function draw(){
    background(0);
    Engine.update(engine);

    a.display();
    b.display();
    c.display();
    d.display();
    e.display();
    f.display();
    g.display();
    h.display();
    i.display();
    j.display();
    k.display();
    l.display();
    m.display();
    n.display();
    o.display();
    p.display();
    q.display();
    r.display();
    s.display();
    t.display();
    a1.display();
    b1.display();
    c1.display();
    d1.display();
    e1.display();
    f1.display();
    g1.display();
    h1.display();
    i1.display();
    j1.display();
    k1.display();
    l1.display();
    m1.display();
    n1.display();
    o1.display();
    p1.display();
    q1.display();
    r1.display();
    s1.display();
    t1.display();
    
    ground.display();
}