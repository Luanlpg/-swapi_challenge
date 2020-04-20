from models import db


class PokemonModel(db.Model):
    __tablename__ = 'pokemon'

    id: int = db.Column(db.Integer, primary_key=True)
    name: str = db.Column(db.String(30), nullable=False)
    front_default: str = db.Column(db.String(200), nullable=False)
    flavor_text_entries: str = db.Column(db.String(500), nullable=False)

    @staticmethod
    def get_by_name(name):
        return db.session.query(PokemonModel).filter_by(name=name).first()

    @staticmethod
    def get_by_id(id: int):
        return PokemonModel.query.filter_by(id=id).first()

    @staticmethod
    def list_all_order_by_name():
        return PokemonModel.query.order_by(PokemonModel.name).all()

#    @staticmethod
#    def list_all_order_by_name():
#        return PokemonModel.query.order_by(PokemonModel.name).all()
#
#    @staticmethod
#    def list_all_order_by_name():
#        return PokemonModel.query.order_by(PokemonModel.name).all()


    def save(self):
        db.session.merge(self)
        db.session.commit()

    def delete(self):
        db.session.delete(self)
        db.session.commit()
