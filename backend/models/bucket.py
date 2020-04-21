from models import db


class BucketModel(db.Model):
    __tablename__ = 'bucket'

    id: int = db.Column(db.Integer, primary_key=True)
    name: str = db.Column(db.String(30), nullable=False)
    url: str = db.Column(db.String(200), nullable=False)
    category: str = db.Column(db.String(30), nullable=False)
    front_default: str = db.Column(db.String(200), nullable=False)
    flavor_text_entries: str = db.Column(db.String(500), nullable=False)
    display_name: str = db.Column(db.String(30), nullable=False)
    height: str = db.Column(db.String(30))
    weight: str = db.Column(db.String(30))
    details: str = db.Column(db.String(3000), nullable=False)

    @staticmethod
    def get_by_name(name):
        return db.session.query(BucketModel).filter_by(name=name).first()

    @staticmethod
    def get_by_id(id: int):
        return BucketModel.query.filter_by(id=id).first()

    @staticmethod
    def get_by_url(url):
        return BucketModel.query.filter_by(url=url).first()

    @staticmethod
    def list_all_order_by_name():
        return BucketModel.query.order_by(BucketModel.name).all()

    @staticmethod
    def count():
        return len(BucketModel.query.all())

    @staticmethod
    def filter_by_params(categorys, order_by):
        by = {
            1: BucketModel.name,
            2: BucketModel.weight,
            3: BucketModel.height
        }
        return BucketModel.query.filter(BucketModel.category.in_(categorys)).order_by(by[order_by]).all()

#    @staticmethod
#    def list_all_order_by_name():
#        return BucketModel.query.order_by(BucketModel.name).all()
#
#    @staticmethod
#    def list_all_order_by_name():
#        return BucketModel.query.order_by(BucketModel.name).all()


    def save(self):
        db.session.merge(self)
        db.session.commit()

    def delete(self):
        db.session.delete(self)
        db.session.commit()
